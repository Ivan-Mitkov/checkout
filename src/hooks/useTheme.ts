import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./useTypedSelector";
import { setTheme } from "../state/ui";
import { Theme } from "../constants/enums";

const THEME_KEY = "theme";

type UseThemeProps = "light" | "dark";

interface ThemeValues {
  theme: Theme;
  onThemeChange: () => void;
}

const useTheme = (initialTheme: UseThemeProps): ThemeValues => {
  const dispatch = useDispatch();
  const currentTheme = useTypedSelector((state) => state.ui.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    const savedTheme =
      storedTheme && ["light", "dark"].includes(storedTheme)
        ? (storedTheme as "light" | "dark")
        : null;

    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    } else {
      dispatch(setTheme(initialTheme));
      localStorage.setItem(THEME_KEY, initialTheme);
    }
  }, [dispatch, initialTheme]);

  const onThemeChange = () => {
    const newTheme = currentTheme === Theme.light ? Theme.dark : Theme.light;
    dispatch(setTheme(newTheme));
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return {
    theme: currentTheme as Theme,
    onThemeChange,
  };
};

export default useTheme;
