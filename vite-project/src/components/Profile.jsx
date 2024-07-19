import React from "react";

export default function Profile() {
  return (
    <div className="profile">
      <img src="./queen.png" className="img" />
      <div className="profileData">
        <h1 className="profileName">Queen Mireille Nsenga</h1>
        <p className="profileOccup">Frontend Developer</p>
        <p className="profileWeb">laurasmith.website</p>
        <div>
          <button className="emailButton">Email</button>
        </div>
      </div>
    </div>
  );
}
