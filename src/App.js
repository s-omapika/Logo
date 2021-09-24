import { Switch, Route, Redirect, BrowserRouter, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Common from "../src/Components/Common.js";
import Entry from "./Components/Entry";
import Footer from "../src/Components/Footer.js";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Entry />
        <Route exact  path="/Navbar" component={Navbar}  />
        <Route exact  path="/home" component={Home}  />
        <Route exact  path="/aboutus" component={Aboutus} /> 
        <Route exact  path="/contactus" component={Contactus} /> 
        <Redirect to="/"/>
    
      </BrowserRouter>
      
     
    </>
  );
}

export default App;
