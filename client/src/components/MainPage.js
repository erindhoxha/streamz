import React from "react";

const FirstPage = () => {
  return (
    <div>
      <div
        style={{
          width: "70%",
          height: "100%",
          borderLeft: "1px solid rgba(0,0,0,0.2)",
          margin: "0 auto",
          position: "absolute",
          left: "15%",
          zIndex: "99999",
          top: "0",
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            backgroundColor: "#dc3545",
            position: "sticky",
            left: "0",
            top: "30%",
          }}
        ></div>
      </div>
      <div className="megaheaderh1">
        <h1 className="h1-megaheader">FIND YOUR FAVOURITE STREAMS.</h1>
        <div
          style={{
            width: "15px",
            height: "15px",
            backgroundColor: "#dc3545",
            position: "absolute",
            right: "0",
            top: "2%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default FirstPage;
