import React from 'react'
import "bulma/css/bulma.css";
import logo from "../../src/Images/logo.jpg"
import Navbar from './Navbar';
function Aboutus() {
    return (
        <div>
          <Navbar />
            <div class="container">
  <div class="is-block column is-12">
    <div class="card-header-icon">
      <div class="card-header-icon">
        <figure class="image is-60x65">
          <img src={logo} alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-10">Somapika Das</p>
        <p class="subtitle is-6">@Somapikasomu</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        </div>
    )
}

export default Aboutus;
