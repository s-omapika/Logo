import React from "react";
import Navbar from "./Navbar";
import vdo from "../Images/pixel.mp4";
import"../Components/Contactus.css";
import { FcHome } from "react-icons/fc";
import { FcTabletAndroid } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";


function Contactus() {
  return (
    <>
    

    <Navbar />
    

       <video
          id="background-video"
          autoPlay
          loop
          muted
          style={{
            objectFit: "cover",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100%",

           

          }}
        >
       
        <source src={vdo} type="video/mp4" />
      </video>

      <div class="contentt">
        <h1> Let's Work Together </h1>
        <p >Get in touch to let us know what you’re looking for and one of our solutions architects will get back to you soon.</p>
          
         <h1> <FcHome /> Visit Us: </h1>
        

         <h3>Muhona Block B, 52/6, Korerpara, Sylhet.</h3>
         <h1 > <FcFeedback/>Mail Us</h1>
         <h3>info@logo.website </h3>
         <h1> <FcTabletAndroid /> Phone Us</h1>
         <h3> +8801700000000</h3>
      </div>
    </>
  );
}

export default Contactus;
