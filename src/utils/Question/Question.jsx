import React from "react";
import "./style.css";
function Question({ question, questionCount }) {
  return (
    <>
      <div className="container">
        <p className="question-count">{`Question ${questionCount} of 6`}</p>
        <div className="questions">{question}</div>
      </div>
    </>
  );
}

export default Question;
