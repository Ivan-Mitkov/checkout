import React from "react";
import { Button } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { isLightTheme } from "../../utils/uiUtils";

import styles from "./PrimaryButton.module.scss";
interface PrimaryButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  classNames?: string[];
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  classNames = [],
}) => {
  const theme = useTypedSelector((state) => state.ui.theme);

  const themeClassName: string = isLightTheme(theme)
    ? styles.lightTheme
    : styles.darkTheme;

  return (
    <Button
      type="primary"
      className={[styles.button, themeClassName, ...classNames].join(" ")}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
