export const getEvaData = (data) => {
  console.log('Actions > getEvaData', data)
  return {
    type: 'GET_DATA',
    data
  };
};