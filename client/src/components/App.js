import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import "../style/global.css";

const PageOne = () => {
  return <div></div>;
};
const PageTwo = () => {
  return <div>PageTwo</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={PageOne} />
        <Route path="/stream/new" exact component={StreamCreate} />
        <Route path="/stream/edit" exact component={StreamEdit} />
        <Route path="/stream/delete" exact component={StreamDelete} />
        <Route path="/stream/show" exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};
export default App;
