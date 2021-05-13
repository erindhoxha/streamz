import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { CreateStream } from "../../actions";
import Header from "../Header";

class StreamCreate extends React.Component {
  renderError({ error, warning, touched }) {
    if (touched && error) {
      return <div className="alert alert-danger">{error}</div>;
    }
    if (touched && warning) {
      return <div className="alert alert-warning">{warning}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="form-group mt-2">
        <label>{label}</label>
        <input
          autoComplete="off"
          className="form-control form-control-md"
          {...input}
        />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.CreateStream(formValues);
  };
  render() {
    return (
      <div>
        <Header minified={true} />
        <div className="container mt-4">
          <form className="" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name="title"
              component={this.renderInput}
              label="Enter title"
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Enter description"
            />
            <input
              type="submit"
              disabled={this.props.submitting}
              value="Submit"
            ></input>
          </form>
        </div>
      </div>
    );
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
};

const warn = (formValues) => {
  const warnings = {};
  if (!formValues.title) {
    warnings.title = "Hmm, that's kind of a short title.";
  }
  if (!formValues.description) {
    warnings.description = "Description is required!";
  }
  return warnings;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
  warn,
})(StreamCreate);

export default connect(null, { CreateStream })(formWrapped);
