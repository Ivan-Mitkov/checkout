import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from "./ThemeProvider.module.scss";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useTypedSelector((state) => state.ui.theme);

  const themeClassName =
    theme === "light" ? styles.lightTheme : styles.darkTheme;

  return <div className={themeClassName}>{children}</div>;
};

export default ThemeProvider;
