import { createStore } from 'redux';
import { dataReducer } from '../reducers/Reducer';

const initialState = {
  currentData: []
};

const Store = createStore(
  dataReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// custom middleware to use async calls to fetch data
const addPromiseToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch);
    }
    return rawDispatch;
  }
}

// Override dispatch with addPromiseToDispatch api method
Store.dispatch = addPromiseToDispatch(Store);

export default Store;