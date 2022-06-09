import { api } from '../constants';

const fetchVotes = async (subId: string) => {
  const response = await fetch(`${api.url}/votes?sub_id=${subId}&limit=1000`, {
    method: 'GET',
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY || '',
    },
  });
  return response.json();
};

export default fetchVotes;
