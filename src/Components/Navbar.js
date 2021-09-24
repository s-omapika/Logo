import React from "react";
import "bulma/css/bulma.css";
import { NavLink } from "react-router-dom";
import lloggo from "../../src/Images/lloggo.png";
import { Fa500Px } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { FaGrinHearts } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { ImWoman } from "react-icons/im";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { GrRestroomWomen } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";
import { AiFillTool } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import { DiKrakenjsBadge } from "react-icons/di";
import { BsLaptop } from "react-icons/bs";
import { FaBasketballBall } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { BiLandscape } from "react-icons/bi";
import { GiLoveLetter } from "react-icons/gi";
import { GiLovers } from "react-icons/gi";
import { ImMan } from "react-icons/im";
import { BiDrink } from "react-icons/bi";
import { AiOutlineWechat } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";
import { AiFillPicture } from "react-icons/ai";
import { GiFarmer } from "react-icons/gi";
import { SiStyledComponents } from "react-icons/si";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import {  BsTriangle} from "react-icons/bs";
import { BsPentagon} from "react-icons/bs";
import {BsSquare } from "react-icons/bs";
import {BsOctagon } from "react-icons/bs";
import {BsDroplet} from "react-icons/bs";
import { BsCone } from "react-icons/bs";
import { GiCircle } from "react-icons/gi";
import { GiHeptagram } from "react-icons/gi";
import {GiKite} from "react-icons/gi";
import { GiRing } from "react-icons/gi";
import { BiRectangle } from "react-icons/bi";
import { BiCylinder } from "react-icons/bi";
import { BiCube } from "react-icons/bi";
import {AiOutlineHeart } from "react-icons/ai";
import { AiOutlineArrowRight  } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {FiHexagon } from "react-icons/fi";
import {FiPieChart } from "react-icons/fi";

import { IoEllipseOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import {  IoEggOutline } from "react-icons/io5";



const Navbar = () => {
  return (
    <div  >
      <nav
        className="navbar is-success "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img
                src={lloggo}
                className="img-responsive logo"
                width="80"
                height="20"
              />
            </a>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" aria-current="page" to="/home">
              Home
            </NavLink>

            <a className="navbar-item" href="/">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">SYMBOL CATEGORY</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  {" "}
                  <Fa500Px /> Abstract
                </a>
                <a className="navbar-item">
                  {" "}
                  <MdPets />
                  Animals and Pets
                </a>
                <a className="navbar-item">
                  {" "}
                  <FaPaintBrush />
                  Art and Design
                </a>
                <a className="navbar-item">
                  {" "}
                  <ImWoman />
                  Avatars
                </a>
                <a className="navbar-item">
                  {" "}
                  <GiCommercialAirplane />
                  Travel
                </a>
                <a className="navbar-item">
                  {" "}
                  <BiWorld />
                  Universe
                </a>
                <a className="navbar-item">
                  <GrRestroomWomen /> Women Beauty
                </a>
                <a className="navbar-item">
                  <BiWorld /> World
                </a>
                <a className="navbar-item">
                  {" "}
                  <BiTimeFive />
                  Time
                </a>
                <a className="navbar-item">
                  {" "}
                  <AiFillTool />
                  Tools
                </a>
                <a className="navbar-item">
                  <GrDeliver /> Transport and Delivery
                </a>
                <a className="navbar-item">
                  <DiKrakenjsBadge /> Badges Stamps
                </a>
                <a className="navbar-item">
                  {" "}
                  <BsLaptop />
                  Technology
                </a>
                <a className="navbar-item">
                  {" "}
                  <FaBasketballBall /> Sports and Adventure
                </a>
                <a className="navbar-item">
                  <BsPencilSquare /> Stationery And Office Icon Set
                </a>
                <a className="navbar-item">
                  <AiFillLock /> Keys Locks
                </a>
                <a className="navbar-item">
                  {" "}
                  <VscBook />
                  In The Library
                </a>
                <a className="navbar-item">
                  <AiOutlineHome /> Home Stuff
                </a>
                <a className="navbar-item">
                  <AiOutlineLike /> Hippies
                </a>
                <a className="navbar-item">
                  <FaBed /> Healthy Life-Style
                </a>
                <a className="navbar-item">
                  <BiLandscape /> Landscape{" "}
                </a>
                <a className="navbar-item">
                  <GiLoveLetter /> Letters
                </a>
                <a className="navbar-item">
                  {" "}
                  <GiLovers />
                  Love And Romance
                </a>
                <a className="navbar-item">
                  {" "}
                  <ImMan />
                  Man accessories
                </a>
                <a className="navbar-item">
                  {" "}
                  <BiDrink />
                  Luxury
                </a>
                <a className="navbar-item">
                  {" "}
                  <AiOutlineWechat />
                  Chat And Messages
                </a>
                <a className="navbar-item">
                  <BiMovie /> Cinema
                </a>
                <a className="navbar-item">
                  {" "}
                  <FaGrinHearts />
                  Emoticons
                </a>
                <a className="navbar-item">
                  {" "}
                  <BsLaptop />
                  Engineering Construction
                </a>
                <a className="navbar-item">
                  <AiFillPicture /> Fairy Tale Set
                </a>
                <a className="navbar-item">
                  {" "}
                  <GiFarmer />
                  Farm
                </a>
                <a className="navbar-item">
                  <SiStyledComponents /> Fashion
                </a>
                <a className="navbar-item">
                  <GiForkKnifeSpoon /> Food and Drinks
                </a>
                <a className="navbar-item">
                  <GiFruitTree /> Garden
                </a>

                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">SHAPE CATEGORY</a>

              <div className="navbar-dropdown">
                <a className="navbar-item"><GiCircle/>Circle</a>
                <a className="navbar-item"><BsTriangle/>Triangle</a>
                <a className="navbar-item"><BiRectangle/>Rectangle</a>
                <a className="navbar-item"><IoEggOutline/>Oval</a>
                <a className="navbar-item"><AiOutlineHeart/>Heart</a>
                <a className="navbar-item"><BsSquare/>Squre</a>
                <a className="navbar-item"><BsPentagon/>Pentagon</a>
                <a className="navbar-item"><FiHexagon/>Hexagon</a>
                <a className="navbar-item"> <GiHeptagram/>Heptagon</a>
                <a className="navbar-item"><BsOctagon/>Octagon</a>
                <a className="navbar-item"><AiOutlineStar/>Star</a>
                <a className="navbar-item"><BsDroplet/>Drop</a>
                <a className="navbar-item"><ImCross/>Cross</a>
                <a className="navbar-item"><BiCube/>Cube</a>
                <a className="navbar-item"><BsCone/>Cone</a>
                <a className="navbar-item"><BiCylinder/>Cylinder</a>
                <a className="navbar-item"><AiOutlineArrowRight/>Arrow</a>
                <a className="navbar-item"><GiKite/>Kite</a>
                <a className="navbar-item"><FiPieChart/>Pie</a>
                <a className="navbar-item"><GiRing/>Ring</a>
               <a className="navbar-item"><IoEllipseOutline/>Ellipse</a>
                <a className="navbar-item"><TiTickOutline/>Right</a>

                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
            <NavLink className="navbar-item" aria-current="page" to="/aboutus">
              About Us
            </NavLink>

            <NavLink
              className="navbar-item"
              aria-current="page"
              to="/contactus"
            >
              Contact Us
            </NavLink>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
