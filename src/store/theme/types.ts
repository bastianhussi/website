export type Theme = {
  background: string;
  foreground: string;
  font: string;
  accent: string;
  brightAccent: string;
};

export type ThemeState = {
  theme: Theme;
};

export type ThemeAction = {
  type: string;
  payload: Theme;
};

export type DispatchType = (args: ThemeAction) => ThemeAction;

export const SET_THEME = "SET_THEME";
