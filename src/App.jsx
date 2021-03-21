import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import StreamCreate from './pages/StreamCreate';
import StreamDelete from './pages/StreamDelete';
import StreamEdit from './pages/StreamEdit';
import StreamList from './pages/StreamList';
import StreamPlay from './pages/StreamPlay';
import history from './utils/history';

function App() {
	return (
		<>
			<Router history={history}>
				<Header />

				<div>
					<Switch>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" component={StreamCreate} />
						<Route path="/streams/play/:id" component={StreamPlay} />
						<Route path="/streams/edit/:id" component={StreamEdit} />
						<Route path="/streams/delete/:id" component={StreamDelete} />
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
