import { USER_SIGN_IN, USER_SIGN_OUT } from '../constants/userConstants';

export const signIn = (userId) => (dispatch) => {
	dispatch({
		type: USER_SIGN_IN,
		payload: { userId },
	});
};

export const signOut = () => (dispatch) => {
	dispatch({
		type: USER_SIGN_OUT,
	});
};
