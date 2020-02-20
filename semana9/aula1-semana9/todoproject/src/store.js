import {createStore} from 'redux';
import rootReducer from './reducers' // indo direto no index.

const store = createStore (rootReducer);

export default store;