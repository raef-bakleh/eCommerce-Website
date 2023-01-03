import Dropdown from "react-bootstrap/Dropdown";
import { BiUserCircle } from "react-icons/bi";
import React, { useContext } from "react";
import AuthContext from "../store/AuthCTX";
import "bootstrap/dist/css/bootstrap.min.css";

const DropDown = () => {
  const authCTX = useContext(AuthContext);
  const signab = () => {
    authCTX.logOut();
    localStorage.setItem("token", "");
  };
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <BiUserCircle fill="grey" size={35} />
      </Dropdown.Toggle>
      <Dropdown.Menu variant="light" id="nav-dropdown">
        <Dropdown.Item onClick={signab}>Logout</Dropdown.Item>
        <Dropdown.Item>hi1</Dropdown.Item>
        <Dropdown.Item>hi2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
