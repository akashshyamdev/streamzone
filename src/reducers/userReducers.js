import { USER_SIGN_IN, USER_SIGN_OUT } from '../constants/userConstants';

export default function authReducer(state = { isSignedIn: null, userId: null }, action) {
	switch (action.type) {
		case USER_SIGN_IN:
			return { ...state, isSignedIn: true, userId: action.payload.userId };
		case USER_SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null };
		default:
			return state;
	}
}
