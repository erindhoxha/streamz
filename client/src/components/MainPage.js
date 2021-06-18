import React from "react";
import Header from "./Header";
import Loader from "./Loader";
import StreamList from "./streams/StreamList";

const FirstPage = () => {
  return (
    <div>
      <Header />
      <div className="container pt-5 pb-5">
        <StreamList />
      </div>
    </div>
  );
};

export default FirstPage;
