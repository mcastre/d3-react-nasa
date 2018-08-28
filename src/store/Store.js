import { createStore } from 'redux';
import { dataReducer } from '../reducers/Reducer';

const Store = createStore(dataReducer);

export default Store;