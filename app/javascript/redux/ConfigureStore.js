import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import greetingReducer from './greeting';

const reducer = combineReducers({
  greeting: greetingReducer,
});
const middleWare = applyMiddleware(thunkMiddleware, logger);

const Store = createStore(reducer, middleWare);

export default Store;