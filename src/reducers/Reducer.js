export const dataReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_DATA':
      return state;
      // return [
      //   ...state,
      //   ...action.data
      // ];
    default:
      return state;
  }
}