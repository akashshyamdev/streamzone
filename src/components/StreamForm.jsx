import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../sass/main.scss';

class StreamForm extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(formValues) {
		this.props.onSubmit(formValues);
	}

	renderInput({ input, label, meta }) {
		return (
			<div className="flex flex-col text-gray-700">
				<label className={`mb-2 mt-7 text-lg ml-5`}>{label}</label>
				<input
					type="text"
					onChange={input.onChange}
					value={input.value}
					className={`font-sans form__input ${meta.error ? 'form__input--invalid' : 'form__input--valid'}`}
					autoComplete="false"
				/>

				<div className="text-red-500 ml-5 mb-3 mt-2">{meta.error}</div>
			</div>
		);
	}

	render() {
		return (
			<form className="w-4/12 pl-10 font-sans text-gray-700" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
				<Field name="title" component={this.renderInput} label="Title" />
				<Field name="description" component={this.renderInput} label="Description" />
				<Field name="image" component={this.renderInput} label="Image" />

				<button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md mt-4">
					Submit
				</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'You must enter a title';
	} else if (!formValues.description) {
		errors.description = 'You must enter a description';
	} else if (!formValues.image) {
		errors.image = 'You must enter an image URL';
	}

	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate,
})(StreamForm);
