import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Answers from '../reducers/answers';
import ChatHistory from '../reducers/chatHistory';

const reducers = combineReducers({
  answers: Answers,
  chatHistory: ChatHistory,
});

const initializeStore = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware()));

export default initializeStore();
