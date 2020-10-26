import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

const StreamCreate = (props) => {
  useEffect(() => {
    console.log(this.props);
  });
  return <div>StreamList</div>;
};

export default connect(null, { fetchStreams })(StreamCreate);
