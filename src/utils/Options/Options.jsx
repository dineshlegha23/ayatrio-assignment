import React from "react";
import "./style.css";

function Options({ setQuestion }) {
  return (
    <>
      <div
        className="options"
        onClick={(e) => {
          setQuestion(e.target.value);
        }}
      >
        <label className="amount-label" htmlFor="1">
          $
          <input type="radio" id="1" name="amount" value={1} />
        </label>

        <label className="amount-label" htmlFor="2">
          $$
          <input type="radio" id="2" name="amount" value={2} />
        </label>
        <label className="amount-label" htmlFor="3">
          $$$
          <input type="radio" id="3" name="amount" value={3} />
        </label>
        <label className="amount-label" htmlFor="4">
          $$$$
          <input type="radio" id="4" name="amount" value={4} />
        </label>
      </div>
    </>
  );
}

export default Options;
