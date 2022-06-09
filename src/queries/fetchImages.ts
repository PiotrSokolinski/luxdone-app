import { api } from '../constants';

const fetchImages = async (breedId: string) => {
  const response = await fetch(`${api.url}/images/search?breed_ids=${breedId}&limit=20`, {
    method: 'GET',
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY || '',
    },
  });
  return response.json();
};

export default fetchImages;
