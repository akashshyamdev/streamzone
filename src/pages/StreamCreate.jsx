import { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions/streamActions';
import StreamForm from '../components/StreamForm';
import '../sass/main.scss';

class StreamCreate extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(formValues) {
		this.props.createStream(formValues);
	}

	render() {
		return (
			<>
				<h2 className="font-serif text-6xl ml-10 text-gray-600">Streams</h2>

				<StreamForm onSubmit={this.handleSubmit} />
			</>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
