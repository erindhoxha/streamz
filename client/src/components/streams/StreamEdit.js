import React from "react";
import { connect } from "react-redux";
import { FetchStreams, EditStream, DeleteStream, FetchStream } from "../../actions";
import history from "../../history";
import Header from "../Header";
import StreamList from "./StreamList";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.FetchStream(6);
  }

  render() {
    return (
      <div>
        <Header minified={true} />
        <div className="container mt-5">
          Edit stream
          <div>
            {console.log(this.props.streams["6"])}
          </div>
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