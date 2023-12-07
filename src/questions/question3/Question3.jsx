import React from "react";
import Options from "../../utils/Options/Options";
import Question from "../../utils/Question/Question";

function Question3({ question3, setQuestion3 }) {
  const question = "What is Your Budget?";
  return (
    <>
      <div className="container">
        <Question question={question3} />
        <Options setQuestion3={setQuestion3} />
      </div>
    </>
  );
}

export default Question3;
