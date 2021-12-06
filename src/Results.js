import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <section>
          <h2>{props.data.word}</h2>
          <Phonetics phonetics={props.data.phonetics} />
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <section>
                <Meaning meaning={meaning} />{" "}
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
