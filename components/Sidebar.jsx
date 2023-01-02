import Link from "next/link";
import React from "react";

const Sidebar = (props) => {
  const closeNavbar = () => {
    props.stateChange.setSideBarToggel(!props.stateChange.sidebarToggel);
  };
  return (
    <div
      className={props.stateChange.sidebarToggel ? "sideBar" : "sieBarClosed"}
    >
      <div className="sideBarContainer">
        <p onClick={closeNavbar} className="NavLinks">
          <Link href={"/headphones"}>Headphones</Link>
        </p>
        <p onClick={closeNavbar} className="">
          <Link href={"/earphones"}>Earphones</Link>
        </p>
        <p onClick={closeNavbar} className="">
          <Link href={"/smartwatches"}>Smartwatches</Link>
        </p>
        <p onClick={closeNavbar} className="">
          <Link href={"/others"}>Others</Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
