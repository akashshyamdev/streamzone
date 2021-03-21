/* eslint-disable import/no-anonymous-default-export */
import { mapKeys, omit } from 'lodash';
import { CREATE_STREAM, DELETE_STREAM, GET_STREAM, GET_STREAMS, UPDATE_STREAM } from '../constants/streamConstants';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_STREAMS:
			return { ...state, ...mapKeys(action.payload, 'id') };
		case GET_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case UPDATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return omit(state, action.payload);
		default:
			return state;
	}
};
