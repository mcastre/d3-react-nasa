export const dataReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_DATA':
      return state;
      // return [
      //   ...state,
      //   ...action.data
      // ];
    case 'SET_CHART_LIMIT': 
      return state;

    default:
      return state;
  }
}