import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import { isLightTheme } from "../../../utils/uiUtils";

import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
  theme: string;
  onClose: () => void;
}
const Header: React.FC<HeaderProps> = ({ title, theme, onClose }) => {
  const renderCloseIcon = () =>
    isLightTheme(theme) ? <MdOutlineClose /> : <SlClose />;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.closeBtn} onClick={onClose}>
        {renderCloseIcon()}
      </div>
    </div>
  );
};

export default Header;
