import React from "react";
import "./style.css";

function List({ data, proceed, setQuestion }) {
  return (
    <div className="grid">
      <ul className="list">
        {data.map((item) => {
          return (
            <li key={item.id} onClick={proceed}>
              <img
                src={item.image}
                alt=""
                onClick={() => setQuestion(item.category)}
              />
              <p className="label">{item.category}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
