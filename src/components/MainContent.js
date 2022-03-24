import React from "react";
import ReactDOM from "react-dom";

function MainContent() {
  return (
    <main className="mainDiv">
      <h1 className="reactFactsText">Fun facts about React</h1>
      <ul className="list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over a 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>

      </ul>
    </main>
  );
}

export default MainContent;
