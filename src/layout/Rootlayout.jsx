import React from "react";
import Navbar from "../section/Navbar";
import { Outlet } from "react-router";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Rootlayout;
