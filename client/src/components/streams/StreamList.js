import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchStreams, EditStream, DeleteStream } from "../../actions";
import streams from "../../api/streams";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.FetchStreams();
  }
  deleteEntry(entry) {
    this.props.DeleteStream(entry);
  }

  editEntry(e) {
    e.preventDefault();
  }

  renderAdmin(stream) {
    if (stream.userId == this.props.currentUserId) {
      return (
        <div className="float-right">
          <button
            onClick={() => this.deleteEntry(stream.id)}
            className="btn btn-danger mr-2"
          >
            Delete
          </button>
          <button onClick={this.editEntry} className="btn btn-warning">
            Edit
          </button>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="text-right">
           <Link to="/stream/new" className="btn btn-success mt-2 ml-auto text-right">
              Create stream
           </Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <a
          href="#"
          className="list-group-item list-group-item-action"
          key={stream.id}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{stream.title}</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">{stream.description}</p>
          <small className="text-muted">Donec id elit non mi porta.</small>
          {this.renderAdmin(stream)}
        </a>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 className="mb-2">Streams</h2>
        <div className="list-group">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.id,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  FetchStreams,
  EditStream,
  DeleteStream,
})(StreamList);
