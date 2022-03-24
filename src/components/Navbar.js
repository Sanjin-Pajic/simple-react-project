import React from "react";

function Navbar() {
    return (
        <div className="navDiv">
            <nav className="nav">
                <img src={require("./react-logo.png")} className="logo" ></img>
                <h1>React</h1>
                <h2>React - First Project</h2> 
            </nav>
        </div>
    )
}

export default Navbar;