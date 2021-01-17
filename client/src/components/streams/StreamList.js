import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchStreams } from "../../actions";
import streams from "../../api/streams";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.FetchStreams();
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
        </a>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 className="mb-2">Streams</h2>
        <div className="list-group mb-5">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { FetchStreams })(StreamList);
