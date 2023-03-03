import { Grid } from "@mui/material";
import React from "react";
import NavBar from "../Navbar/NavBar";
import RouteList from "../Routes/RouteList";
import SideBar from "../SideBar/SideBar";
import "./layout.css";
const Layout = () => {
  return (
    <>
      {/* navbar */}
      <section>
        <div>
          <NavBar />
        </div>
      </section>
      {/* sidebar */}
      <section>
        <Grid container spacing={1}>
          <Grid item style={{width: "100px"}}>
            <SideBar />
          </Grid>
          <Grid item xs><RouteList/></Grid>
        </Grid>
      </section>
    </>
  );
};

export default Layout;
