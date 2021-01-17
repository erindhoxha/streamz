import React from "react";
import Header from "./Header";
import StreamList from "./streams/StreamList";

const FirstPage = () => {
  return (
    <div>
      <Header />
      <div className="container pt-5">
        <StreamList />
      </div>
    </div>
  );
};

export default FirstPage;
