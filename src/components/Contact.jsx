import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <a className="contact-icon" data-aos="zoom-in" data-aos-duration="1000">
          <div href="" target="_blank" className="items">
            <FaSquareInstagram className="icons" />
          </div>
          <a href="" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:kravinash2018@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </a>
      </div>
    </>
  );
};

export default Contact;
