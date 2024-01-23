import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { isLightTheme } from "../../utils/uiUtils";
import { Theme } from "../../constants/enums";

import styles from "./ThemeProvider.module.scss";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useTypedSelector((state) => state.ui.theme);

  const themeClassName = isLightTheme(theme)
    ? styles.lightTheme
    : styles.darkTheme;

  return <div className={themeClassName}>{children}</div>;
};

export default ThemeProvider;
