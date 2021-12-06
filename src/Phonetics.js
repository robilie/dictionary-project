import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <p className="link">
        {" "}
        <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </p>
      <p className="text">{props.phonetics[0].text}</p>
    </div>
  );
}
