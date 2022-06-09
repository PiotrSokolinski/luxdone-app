import { NewVote } from '../types';
import { api } from '../constants';

const performVote = async ({ imageId, value }: NewVote) => {
  const response = await fetch(`${api.url}/votes`, {
    method: 'POST',
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY || '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_id: imageId,
      value,
      sub_id: process.env.REACT_APP_API_KEY,
    }),
  });

  return response.json();
};

export default performVote;
