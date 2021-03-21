import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStream } from '../actions/streamActions';

export default function StreamPlay({ match }) {
	const id = match.params.id;

	const dispatch = useDispatch();

	const { description, title } = useSelector((state) => state.streams)[id];

	useEffect(() => {
		dispatch(getStream(id));
	}, [dispatch, id]);

	return (
		<>
			<h2 className="font-serif text-6xl ml-10 text-gray-600">{title}</h2>
			<p className="ml-10 mt-3 text-gray-600">{description}</p>
		</>
	);
}
