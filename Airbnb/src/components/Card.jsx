import React from "react";

export default function Card(props) {
  return (
    <section className="navbar">
      <button className="button1">Sold out </button>
      <img src={`./${props.img}`} className="woman"  />
      <div>
        <p>
          <img src="./star.png" alt="" className="star" /> {props.rating} ({props.reviewCount}).{props.country}
        </p>
        <p>{props.title}</p>
        <p>
          <b>From ${props.price}</b> /person
        </p>
      </div>
    </section>
  );
}
