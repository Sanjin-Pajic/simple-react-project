import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

//ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  return (
    <div>
      <Navbar/>
      <MainContent/>
    </div>
  );
}

export default App;




