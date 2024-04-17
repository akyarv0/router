import React from "react";
import "./_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="horizontal">
      <div className="social-icons">
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
      </div>
      <div className="copyright">&copy; Copyright 2023</div>
    </footer>
  );
};

export default Footer;
