import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Answers from '../reducers/answers';

const reducers = combineReducers({
  answers: Answers,
});

const initializeStore = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware()));

export default initializeStore();
