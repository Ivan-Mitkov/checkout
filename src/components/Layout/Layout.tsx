import React from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../AppBar";

const Layout = () => {
  return (
    <>
      <div id="layout">
        <AppBar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
