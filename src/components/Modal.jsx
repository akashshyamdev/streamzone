import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ title, content, actions, onDismiss }) {
	return ReactDOM.createPortal(
		<div className="w-full h-full bg-black fixed top-0 left-0 flex justify-center items-center bg-opacity-85" onClick={onDismiss}>
			<div className="modal bg-white w-1/2 py-10 px-10 rounded" onClick={(e) => e.stopPropagation()}>
				<h3 className="text-gray-600 text-5xl pb-3">{title}</h3>

				<p className="text-gray-600 text-base pb-10">{content}</p>

				<div>{actions} </div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
}
