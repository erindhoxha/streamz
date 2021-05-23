import React from "react";
import { connect } from "react-redux";
import { FetchStreams, EditStream, DeleteStream, FetchStream } from "../../actions";
import Header from "../Header";

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
            {console.log("Stream:", this.props.stream)}
            Title: {this.props.stream ? this.props.stream.title : ''}
            Description: {this.props.stream ? this.props.stream.description : ''}
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