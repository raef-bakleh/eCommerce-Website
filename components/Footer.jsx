import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <p> Copyright © 2022. All rights reserved.</p>
      <p>
        Developed by{" "}
        <Link href={"https://github.com/raef-bakleh"} target="_blank">
          Raef Bakleh
        </Link>
      </p>
      <p className="icons">
        <AiFillInstagram />
      </p>
    </div>
  );
};

export default Footer;
