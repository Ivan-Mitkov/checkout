import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./useTypedSelector";
import { setTheme } from "../state/ui";

const THEME_KEY = "theme";

type UseThemeProps = "light" | "dark";

interface ThemeValues {
  theme: "light" | "dark";
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
    const newTheme = currentTheme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return {
    theme: currentTheme,
    onThemeChange,
  };
};

export default useTheme;
