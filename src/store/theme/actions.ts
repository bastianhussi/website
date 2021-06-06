import { Theme } from "../../themes";
import { SET_THEME, ThemeAction } from "./types";

export const setTheme = (payload: Theme) => {
  const action: ThemeAction = {
    type: SET_THEME,
    payload,
  };
  return action;
};
