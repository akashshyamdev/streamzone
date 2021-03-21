import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth.jsx';

export default function Header() {
	const [isShown, setIsShown] = useState(false);

	const switchMenuState = () => {
		setIsShown(!isShown);
	};

	return (
		<header className="relative bgWhite text-gray-700">
			<div className="maxW-7xl mx-5 px-4 sm:px-6">
				<div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10 z-30">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link to="/">
							<span className="sr-only">Workflow</span>
							<img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
						</Link>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						{!isShown ? (
							<button
								type="button"
								className="bgWhite rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								onClick={switchMenuState}
							>
								<span className="sr-only">Close menu</span>
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						) : (
							<button
								type="button"
								className="bgWhite rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								aria-expanded="false"
								onClick={switchMenuState}
							>
								<span className="sr-only">Open menu</span>
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						)}
					</div>

					<nav className="hidden md:flex space-x-10">
						<Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
							Streams
						</Link>
						<Link to="/streams/new" className="text-base font-medium text-gray-500 hover:text-gray-900">
							Create Stream
						</Link>
					</nav>

					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<Auth />
					</div>
				</div>
			</div>

			{/*
              Mobile menu, show/hide based on mobile menu state.
          
              Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            */}

			<div className={`absolute top-0 inset-x-0 p-2 transition transform origin-topRight md:hidden ${isShown ? 'hidden' : null}`}>
				<div className="roundedLg shadowLg ring-1 ring-black ring-opacity-5 bgWhite divide-y-2 divide-gray-50">
					{console.log(isShown)}
					<div className="pt-4 pb-6 px-5">
						{/* <div className="flex items-center justify-between">
							<div>
								<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
							</div>
							<div className="-mr-2">
								<button
									type="button"
									className="bgWhite rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									onClick={switchMenuState}
								>
									<span className="sr-only">Close menu</span>
									<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div> */}

						<div className="mt-16">
							<nav className="grid gap-y-8">
								<Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
									Streams
								</Link>
								<Link to="/streams/new" className="text-base font-medium text-gray-500 hover:text-gray-900">
									Create Stream
								</Link>
							</nav>
						</div>
					</div>
					<div className="py-6 px-5 space-y-6">
						<div className="flex flex-row justify-center">
							<Auth />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
