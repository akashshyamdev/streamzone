/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStreams } from '../actions/streamActions';
import { Link } from 'react-router-dom';
import '../sass/main.scss';

export default function StreamList({ history }) {
	const dispatch = useDispatch();

	const streams = Object.values(useSelector((state) => state.streams));
	const { userId } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getStreams());
	}, [dispatch]);

	return (
		<div className="px-10 mt-5 text-gray-600">
			<div className="mb-16 flex flex-row justify-between">
				<h2 className="font-serif text-6xl">Streams</h2>

				{userId && (
					<button className="btn--border" onClick={() => history.push('/streams/new')}>
						New Stream
					</button>
				)}
			</div>

			{streams.map((stream) => (
				<div key={stream.id} className="border-t-2 last:border-b-2 py-2 px-3 flex flex-row items-center last-border-b justify-between first:border-t-0 first-border-t-none">
					<div className="flex flex-row">
						<img src={stream.image} alt="" className="rounded w-12 h-12" />

						<div className="ml-5">
							<Link to={`/streams/play/${stream.id}`}>
								<h4 className="text-2xl">{stream.title}</h4>
								<p className="text-gray-400 text-sm">{stream.description}</p>
							</Link>
						</div>
					</div>

					{userId && (
						<div className="justify-self-end">
							<button className="btn--border mr-8" onClick={() => history.push(`/streams/edit/${stream.id}`)}>
								Edit
							</button>

							<button className="btn--red-border" onClick={() => history.push(`/streams/delete/${stream.id}`)}>
								Delete
							</button>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
