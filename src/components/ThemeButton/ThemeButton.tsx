import React from "react";
import { MdWbSunny } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { Theme } from "../../constants/enums";
import { isLightTheme } from "../../utils/uiUtils";

import styles from "./ThemeButton.module.scss";

interface ThemeButtonProps {
  theme: Theme;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, onClick }) => {
  return (
    <div onClick={onClick} className={styles.container}>
      {isLightTheme(theme) ? <MdWbSunny /> : <MdOutlineWbSunny />}
    </div>
  );
};

export default ThemeButton;
