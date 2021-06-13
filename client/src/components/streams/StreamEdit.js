import React from "react";
import { connect } from "react-redux";
import { FetchStreams, EditStream, DeleteStream, FetchStream } from "../../actions";
import Header from "../Header";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.FetchStream(this.props.match.params.id);
    console.log("Props are here!", this.props);
  }

  renderStream(id) {
    return (
      <div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Header minified={true} />
        <div className="container mt-5">
          Edit stream
          <div>
            <StreamForm initialValues={this.props.stream} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  EditStream,
  FetchStream
})(StreamEdit);