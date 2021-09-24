import React from "react";
import PreviousNextMethods from "./Carousel";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

function Home() {
  return (
    <div>
        <Navbar />
        <Welcome />
      <PreviousNextMethods />
    </div>
  );
}

export default Home;
