import { Theme } from "../constants/enums";

export const isLightTheme = (theme: string) => {
  return theme === Theme.light;
};
