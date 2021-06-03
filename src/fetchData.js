import axios from 'axios';

export const fetchData = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json');
};

export const fetchData1 = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json');
};
