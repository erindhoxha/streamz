import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.FetchStreams();
  }

  render() {
    console.log(this.props);
    return this.props.streams.map((item) => {
      return (
        <div key={item.id} className="stream-card">
          <div>{item.title}</div>
          <div className="card-image"></div>
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { FetchStreams })(StreamList);
