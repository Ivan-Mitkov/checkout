import React from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../AppBar";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.container}>
      <div id="layout" className={styles.header}>
        <AppBar />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
