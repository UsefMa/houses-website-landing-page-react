import React from "react";
import { useState } from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyle.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileClick, setMobileClick] = useState(false);
  const mobile = () => setMobileClick(!mobileClick);
  const closeMenu = () => setMobileClick(false);

  return (
    <>
      <div className="navbar-container ">
        <Link to="home"
              smooth={true}
              duration={2000}
              onClick={closeMenu}>
        
        <BsFillHouseFill
          size={40}
          style={{ marginLeft: "10px", cursor: "pointer" }}
        />
        </Link>

        <ul className={mobileClick ? "nav-list active " : "nav-list"}>
          <li className="nav-item">
            <Link style={{cursor:"pointer"}}
              to="home"
          
              smooth={true}
             
              duration={2000}
              onClick={closeMenu}
              
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link style={{cursor:"pointer"}}
              to="prices"
              smooth={true}
              duration={2000}
              onClick={closeMenu}
              
            >
              product
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{cursor:"pointer"}}
              to="contact"
              smooth={true}
              duration={2000}
              onClick={closeMenu}
              
            >
              contact
            </Link>
          </li>
        </ul>
        <div className="humberger" onClick={mobile}>
          {mobileClick ? (
            <FaTimes
              size={20}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
          ) : (
            <FaBars
              size={20}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
          )}
        </div>
      </div>
    </>
  );
};


export default Navbar;
