import { lightTheme } from "../../themes";
import { SET_THEME } from "./types";
import { ThemeAction, ThemeState } from "./types";

const initialState: ThemeState = {
  theme: lightTheme,
};

const themeReducer = (
  state = initialState,
  action: ThemeAction
): ThemeState => {
  const { type, payload } = action;
  switch (type) {
    case SET_THEME: {
      return {
        theme: payload,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
