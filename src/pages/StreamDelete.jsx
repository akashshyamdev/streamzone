import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
import { deleteStream, getStream } from '../actions/streamActions';
import history from '../utils/history';

export default function StreamDelete({ match }) {
	const { id } = match.params;

	const dispatch = useDispatch();

	const stream = useSelector((state) => state.streams)[id];

	useEffect(() => {
		dispatch(getStream(id));
	}, [dispatch, id]);

	const deleteHandler = (_id) => {
		dispatch(deleteStream(_id));
	};

	const actions = (
		<>
			<button className="btn--red mr-5" onClick={() => deleteHandler(id)}>
				Delete
			</button>
			<button className="btn" onClick={() => history.push('/')}>
				Cancel
			</button>
		</>
	);

	const content = !stream ? 'Are you sure you want to delete this stream?' : `Are you sure you want to delete stream with title: ${stream.title}?`;

	return <Modal actions={actions} title="Delete Stream" content={content} onDismiss={() => history.push('/')} />;
}
