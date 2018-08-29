import { getApiData } from '../api/DataApi';

const setData = (args) => ({
  type: 'SET_DATA',
  args
});

export const fetchData = (args) => 
  getApiData(args).then(res => {
    return setData(res);
  });