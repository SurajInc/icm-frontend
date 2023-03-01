import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.svg"
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
       
      <Navbar.Brand className="ms-3">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top me-2"
        /><span className="">Travel and Reimbursement</span> 
      </Navbar.Brand>
      
      <Navbar.Collapse className="justify-content-end">
          
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
