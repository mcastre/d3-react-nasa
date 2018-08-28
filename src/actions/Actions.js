export const getEvaData = (data, filter) => {
  console.log('Actions > getEvaData', data)
  return {
    type: 'GET_DATA',
    data,
    filter
  };
};

export const setChartLimit = (val) => {
  console.log('Actions > setChartLimit', val)
  return {
    type: 'SET_CHART_LIMIT',
    val
  };
};