import React from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../utils/Question/Question";
import { data } from "../../data/data";
import List from "../List";

function Question1({ setQuestion1 }) {
  const navigate = useNavigate();
  const question = "Which room's are you shopping for new flooring?";
  const proceed = () => {
    navigate("/question2");
  };
  return (
    <>
      <div className="container">
        <Question question={question} questionCount={1} />

        <List data={data} proceed={proceed} setQuestion={setQuestion1} />
      </div>
    </>
  );
}

export default Question1;
