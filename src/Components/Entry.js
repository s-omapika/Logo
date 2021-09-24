
import "../../src/App.css";
import logo from "../Images/logo.jpg";
import Button from "./Button";
import React, { useState } from "react";
import { Redirect,Route } from "react-router-dom";
import Navbar from "./Navbar";


function Entry() {
  const [now, setNow] = useState("");
      

  if (now) {
    return <Redirect to="/home" />   
}



  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bring to light our Logos...</p>
         
         <input
              type="button"
              className="button is-success"
              onClick={() => setNow(true)}
              value="click"
            />
            
 
        </header>
       
      </div>
    </div>
  );
}

export default Entry;
