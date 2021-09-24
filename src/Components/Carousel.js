import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo from "../Images/logo.jpg";
import l1 from "../Images/l1.png";
import l2 from "../Images/l2.png";
import l3 from "../Images/l3.jpg";
import l4 from "../Images/l4.png";
import l5 from "../Images/l5.png";
import l6 from "../Images/l6.png";
import l7 from "../Images/l7.png";
import l8 from "../Images/l8.png";
import l9 from "../Images/l9.png";
import l10 from "../Images/l10.png";
import l11 from "../Images/l11.png";
import l12 from "../Images/l12.png";





export default class PreviousNextMethods extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        rows: 1,
        centerMode: true,
        slidesPerRow: 3,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        
      };
      return (
        <div>
          
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div key={1}>
            <img src={logo} alt="Placeholder image"/>
            </div>
            <div key={2}>
            <img src={l1} alt="Placeholder image"/>
            </div>
            <div key={3}>
            <img src={l2} alt="Placeholder image"/>
            </div>
            <div key={4}>
            <img src={l3} alt="Placeholder image"/>
            </div>
            <div key={5}>
            <img src={l4} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l5} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l6} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l7} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l8} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l9} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l10} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l11} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l12} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l9} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l10} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l11} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l12} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l9} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l10} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l11} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l9} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l10} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l11} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l12} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l9} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l10} alt="Placeholder image"/>
            </div>
            <div key={6}>
            <img src={l11} alt="Placeholder image"/>
            </div>
           
          </Slider>
          <div style={{ textAlign: "center" }}>
            <button className="button is-success" onClick={this.previous}>
              Previous
            </button>
            <button className="button is-warning" onClick={this.next}>
              Next
            </button>
          </div>
        </div>
      );
    }
  }