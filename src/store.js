import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/userReducers.js';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import streamReducers from './reducers/streamReducers.js';

const reducer = combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducers,
});

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
