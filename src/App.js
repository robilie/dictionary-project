import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Dictionary</h1>
      <h2 className="App-header-2">What word would you like to search?</h2>
      <div className="background container">
        <Dictionary defaultKeyword="sunset" />
      </div>
      <footer className="footer">
        This project was coded by Roberta Obilie and is open-sourced on{" "}
        <a
          href="https://github.com/robilie/dictionary-project.git"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://compassionate-ritchie-5a8645.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
