import React from "react";

import styles from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuIcon}></div>
      App Bar
    </div>
  );
};

export default AppBar;
