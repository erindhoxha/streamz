import React from "react";
import { connect } from "react-redux";
import { FetchStreams, EditStream, DeleteStream, FetchStream } from "../../actions";
import history from "../../history";
import Header from "../Header";
import StreamList from "./StreamList";

class StreamEdit extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Header minified={true} />
        <div className="container mt-5">
          Edit stream
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
    currentUserId: state.auth.id,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  FetchStreams,
  EditStream,
  DeleteStream,
  FetchStream
})(StreamEdit);