import { api } from '../constants';

const fetchBreeds = async () => {
  const response = await fetch(`${api.url}/breeds`, {
    method: 'GET',
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY || '',
    },
  });
  return response.json();
};

export default fetchBreeds;
