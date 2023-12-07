import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Question1 from "./questions/question1/Question1";
import Question2 from "./questions/question2/Question2";
import Question3 from "./questions/question3/Question3";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [question1, setQuestion1] = useState();
  const [question2, setQuestion2] = useState();
  const [question3, setQuestion3] = useState();
  if (question1 && question2 && question3) {
    console.log(
      `Question 1 - ${question1}, Question 2 - ${question2}, Question 3 - ${question3}`
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Question1 setQuestion1={setQuestion1} />} />
          <Route
            path="/question2"
            element={<Question2 setQuestion2={setQuestion2} />}
          />
          <Route
            path="/question3"
            element={<Question3 setQuestion3={setQuestion3} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
