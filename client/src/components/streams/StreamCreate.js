import React from "react";
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control form-control-md" {...input} />
      </div>
    );
  }
  onSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <form className="" onSubmit={() => this.props.form}>
          <Field name="title" component={this.renderInput} label="Enter title" />
          <Field name="description" component={this.renderInput} label="Enter description" />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
