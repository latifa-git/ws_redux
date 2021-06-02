import {createStore} from 'redux';
import rootReducers from './reducer/index'
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store =createStore(rootReducers, devtools )
export default store;