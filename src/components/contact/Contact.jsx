import React from "react";
import "./ContactStyle.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="footer-container" id="contact">
        
        <form>
          <input type="text" placeholder="Put Your Name" className="name" />
          <br />
          <input type="email" placeholder="Put Your Email" className="email" />
          <br />
          <textarea type="text" placeholder="Write a Message" className="msg" />
        </form>
        <button className="contact-btn">Submite</button>
        <br />

        <div className="icons">
          <BsFacebook size={40}  style={{margin:"1rem", cursor:"pointer"}}/>
          <BsYoutube size={40} style={{margin:"1rem",cursor:"pointer"}}/>
          <BsInstagram size={40} style={{margin:"1rem",cursor:"pointer"}}/>
        </div>
      </div>
    </>
  );
};

export default Contact;
