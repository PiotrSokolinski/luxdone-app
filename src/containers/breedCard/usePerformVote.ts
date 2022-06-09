import { useMutation, useQueryClient } from 'react-query';

import performVote from '../../mutations/performVote';
import { Vote, NewVote } from '../../types';

const usePerformVote = () => {
  const queryClient = useQueryClient();

  return useMutation((newVote: NewVote) => performVote(newVote), {
    onMutate: async (newVote: NewVote) => {
      await queryClient.cancelQueries(['votes', { subId: process.env.REACT_APP_API_KEY }]);

      const previousVotes = queryClient.getQueryData<Vote[]>([
        'votes',
        { subId: process.env.REACT_APP_API_KEY },
      ]);

      if (previousVotes) {
        queryClient.setQueryData<Vote[]>(
          ['votes', { subId: process.env.REACT_APP_API_KEY }],
          [...previousVotes, { image_id: newVote.imageId, value: newVote.value } as Vote],
        );
      }

      return { previousVotes };
    },
    onError: (err, variables, context) => {
      if (context && context.previousVotes) {
        queryClient.setQueryData(
          ['votes', { subId: process.env.REACT_APP_API_KEY }],
          context.previousVotes,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(['votes', { subId: process.env.REACT_APP_API_KEY }]);
    },
  });
};

export default usePerformVote;
