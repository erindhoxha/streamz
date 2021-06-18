import React from "react";
import { connect } from "react-redux";
import { CreateStream } from "../../actions";
import Header from "../Header";
import Loader from "../Loader";
import StreamForm from "../streams/StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.CreateStream(formValues);
  };
  componentDidMount() {
    console.log("Mounted!");
  }
  render() {
    return (
      <div>
        <Header minified={true} />
        <div className="container mt-4">
          <h3>Create form</h3>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { CreateStream })(StreamCreate);
