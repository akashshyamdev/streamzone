import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reducers/userReducers.js';

const reducer = combineReducers({ authReducer });

const middleware = [thunk];

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
