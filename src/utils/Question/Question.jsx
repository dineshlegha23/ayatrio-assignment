import React from "react";
import "./style.css";
function Question({ question }) {
  return (
    <>
      <div className="container">
        <div className="questions">{question}</div>
      </div>
    </>
  );
}

export default Question;
