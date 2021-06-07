import axios from 'axios';

// 异步
export const fetchData = () => {
  return axios.get('/').then((res) => res.data);
};

// 同步
export const getNumber = () => {
  return 123;
};
