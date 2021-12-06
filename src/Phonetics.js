import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <p>
        <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </p>

      <p>{props.phonetics[0].text}</p>
    </div>
  );
}
