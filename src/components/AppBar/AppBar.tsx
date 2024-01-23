import useTheme from "../../hooks/useTheme";
import { ThemeButton } from "../../components";
import styles from "./AppBar.module.scss";

const AppBar = () => {
  const { theme, onThemeChange } = useTheme("light");

  return (
    <div className={styles.container}>
      <div className={styles.switch}>
        <ThemeButton theme={theme} onClick={onThemeChange} />
      </div>
    </div>
  );
};

export default AppBar;
