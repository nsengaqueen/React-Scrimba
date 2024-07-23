import React from "react";

export default function Card() {
  return (
    <section className="navbar">
      <button className="button1">Sold out </button>
      <img src="./woman.png" alt="" className="woman"  />
      <div>
        <p>
          <img src="./star.png" alt="" className="star" /> 5.0 (6).USA
        </p>
        <p>Life lessons with Katie zaferes</p>
        <p>
          <b>From $136</b> /person
        </p>
      </div>
    </section>
  );
}
