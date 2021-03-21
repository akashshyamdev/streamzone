import axios from 'axios';
import { CREATE_STREAM, DELETE_STREAM, GET_STREAM, GET_STREAMS, UPDATE_STREAM } from '../constants/streamConstants';
import history from '../utils/history';

export const getStreams = () => async (dispatch) => {
	const response = await axios.get('http://localhost:3001/streams');

	dispatch({ type: GET_STREAMS, payload: response.data });
};

export const getStream = (id) => async (dispatch) => {
	const response = await axios.get(`http://localhost:3001/streams/${id}`);

	dispatch({ type: GET_STREAM, payload: response.data });
};

export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;

	const response = await axios.post('http://localhost:3001/streams', { ...formValues, userId });
	dispatch({ type: CREATE_STREAM, payload: response.data });

	history.push('/');
};

export const updateStream = (id, formValues) => async (dispatch) => {
	const response = await axios.patch(`http://localhost:3001/streams/${id}`, formValues);
	dispatch({ type: UPDATE_STREAM, payload: response.data });

	history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
	const response = await axios.delete(`http://localhost:3001/streams/${id}`);

	dispatch({ type: DELETE_STREAM, payload: response.data });
	history.push('/');
};
