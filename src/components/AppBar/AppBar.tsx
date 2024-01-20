import React from "react";
import useTheme from "../../hooks/useTheme";

import styles from "./AppBar.module.scss";

const AppBar = () => {
  const { theme, onThemeChange } = useTheme("light");
  return (
    <div className={styles.container} onClick={onThemeChange}>
      <div className={styles.menuIcon}></div>
      {theme}
    </div>
  );
};

export default AppBar;
