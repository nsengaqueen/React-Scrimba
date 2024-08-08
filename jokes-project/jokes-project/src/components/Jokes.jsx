import React from "react";

export default function Jokes(props) {
    console.log(props.Comments)
  return (
    <div>
      {props.Setup && <h3>Setup: {props.Setup}</h3>}
      <p>Punchline: {props.Punchline}</p>
      <p>{props.Upvotes}</p>
      <p>{props.Comments}</p>
      <p>{props.isPun}</p>
    </div>
  );
}
