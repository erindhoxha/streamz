import React from "react";
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    console.log(meta);
    return (
      <div className="form-group">
        <label>{label}</label>
        <input autoComplete="off" className="form-control form-control-md" {...input} />
        {meta.touched ? (
          <div className="invalid-feedback d-block">{meta.error}</div>
        ) : ''}
      </div>
    );
  }
  onSubmit(formValues) {
    console.log('Running!');
  }
  render() {
    return (
      <div className="container">
        <form className="" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter title" />
          <Field name="description" component={this.renderInput} label="Enter description" />
          <input type="submit" disabled={this.props.submitting} value="Submit"></input>
          {this.props.submitSucceeded ? (
            <p>Submission successful.</p>
          ) : ''}
          {this.props.submitFailed ? (
            <p>Submission failed. Please try again.</p>
          ) : ''}
        </form>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    // only ran if the user did not enter a title
    errors.title = "Title is required!";
  }
  if (!formValues.description) {
    errors.description = "Description is required!";
  }
  return errors;
}

const warn = (formValues) => {
  const warnings = {}
  if (!formValues.title) {
    warnings.title = "Hmm, that's kind of a short title.";
  }
  if (!formValues.description) {
    warnings.description = "Description is required!";
  }
  return warnings;
}

export default reduxForm({
  form: 'streamCreate',
  validate,
  warn
})(StreamCreate);
