import React from "react";
import "./About.scss";
import pro from "./ani.jpg";

export default function About() {
  return (
    <div className="About">
      <h1>Title</h1>
      <div className="intro">
        <div className="image">
          <img src={pro} />
        </div>
        <p></p>
      </div>
    </div>
  );
}
