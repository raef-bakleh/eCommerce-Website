import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <p> Copyright © 2022. All rights reserved.</p>
      <p>
        Developed by
        <Link href={"https://github.com/raef-bakleh"} target="_blank">
          <span  className="githubLink">
        
            Raef Bakleh{" "}
          </span>
        </Link>
      </p>
      <div className="iconsLinks ">
        <Link href={"https://github.com/raef-bakleh"} target="_blank">
          <p className="icons github">
            <AiFillGithub />
          </p>
        </Link>

        <Link
          href={"https://www.linkedin.com/in/raef-bakleh-021293230/"}
          target="_blank"
        >
          <p className="icons linkedin">
            <AiFillLinkedin />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
