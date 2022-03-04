import React from "react";

function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export { Card };
