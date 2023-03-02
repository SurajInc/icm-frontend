import React from "react";
import logo from "../../assets/logo.svg";
const NavBar = () => {
  return (
    <>
      <div className="w-full d-flex align-items-center ps-4 nav">
        <div>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="me-3"
          />
        </div>
        <div>
            <p className="h4 mt-3">Travel and Reimbursement</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;


