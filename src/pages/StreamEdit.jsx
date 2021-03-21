import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pick } from 'lodash';
import { getStream, updateStream } from '../actions/streamActions';
import StreamForm from '../components/StreamForm';

export default function StreamEdit({ match }) {
	const id = match.params.id;

	const dispatch = useDispatch();

	const stream = useSelector((state) => state.streams)[id];

	const handleSubmit = (formValues) => {
		dispatch(updateStream(id, formValues));
	};

	useEffect(() => {
		dispatch(getStream(id));
	}, [dispatch, id]);

	return (
		<>
			<h2 className="font-serif text-6xl ml-10 text-gray-600">Streams</h2>

			<StreamForm initialValues={pick(stream, 'title', 'description', 'image')} onSubmit={handleSubmit} />
		</>
	);
}

// I convert your ideas into amazing online designs. I make large & small scale design solutions for products of any purpose.

// Design process:
// 1. Research about target audience
// 2. Wireframing your idea
// 3. Dig deep into UX and userflows
// 4. Adding life and interaction into your idea by prototyping

// Products:
// ✶ Landing pages
// ✶ Responsive
// ✶ Multi-page websites
// ✶ Dashboards/CRM designs
// ✶ iOS & Android app designs

// Tools:
// 1. Adobe XD
// 2. Figma

// Additional services:
// ❉ Brand identity - logo, font, colors, digital presence
// ❉ Illustrations

// Cheers, I look forward to working with you 😀
