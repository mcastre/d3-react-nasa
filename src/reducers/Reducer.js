export const dataReducer = (state = [], action) => {
  const { type, args } = action;

  switch(type) {
    case 'SET_DATA': 
      state.currentData = [...args];
      return state;

    default: return state;
  }
}