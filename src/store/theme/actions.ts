import { SET_THEME, Theme, ThemeAction } from "./types";

export const setTheme = (payload: Theme) => {
  const action: ThemeAction = {
    type: SET_THEME,
    payload,
  };
};
