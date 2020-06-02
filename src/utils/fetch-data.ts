import axios from 'axios';

export const API = 'https://api.adviceslip.com/advice';

export const fetchData = async () => {
  return await axios.get(API).then((res) => res.data.slip);
};
