import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../actions/userActions';

export default function Auth() {
	const dispatch = useDispatch();

	const isSignedIn = useSelector((state) => state.auth.isSignedIn);

	useEffect(() => {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '386457175027-ner7v62phog0togo8esckkhaa6t7hfaa.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					const auth = window.gapi.auth2.getAuthInstance();

					handleAuthChange();
					auth.isSignedIn.listen(handleAuthChange);
				});
		});

		// eslint-disable-next-line
	}, [isSignedIn]);

	const handleAuthChange = () => {
		const auth = window.gapi.auth2.getAuthInstance();

		if (isSignedIn) {
			dispatch(signIn(auth.currentUser.get().getId()));
		} else {
			dispatch(signOut());
		}
	};

	const handleSignIn = () => {
		const auth = window.gapi.auth2.getAuthInstance();
		auth.signIn();
		dispatch(signIn());
	};

	const handleSignOut = () => {
		const auth = window.gapi.auth2.getAuthInstance();
		auth.signOut();
		dispatch(signOut());
	};

	return isSignedIn === null ? (
		<p></p>
	) : isSignedIn === false ? (
		<button className="bg-indigo-600 text-white px-6 py-3 rounded-md mr-3" onClick={handleSignIn}>
			Sign In
		</button>
	) : (
		<button className="rounded-md px-6 py-3 bg-indigo-600 text-white mr-3" onClick={handleSignOut}>
			Sign Out
		</button>
	);
}
