import React from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../utils/Question/Question";
import { categoryData } from "../../data/category-data";
import List from "../List";

function Question2({ setQuestion2 }) {
  const question = "What Does Your Day to Day Activity Level Look Like?";
  const navigate = useNavigate();
  const proceed = () => {
    navigate("/question3");
  };
  return (
    <>
      <div className="container">
        <Question question={question} />

        <List
          data={categoryData}
          proceed={proceed}
          setQuestion={setQuestion2}
        />
      </div>
    </>
  );
}

export default Question2;
