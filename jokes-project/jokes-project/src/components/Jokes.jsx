import React from "react";

export default function Jokes(props) {
  return (
    <div>
      {props.Setup && <h3>Setup: {props.Setup}</h3>}
      <p>Punchline: {props.Punchline}</p>
    </div>
  );
}
