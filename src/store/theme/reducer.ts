import { lightTheme, darkTheme } from "../../themes";
import { SET_THEME } from "./types";
import { ThemeAction, ThemeState } from "./types";

// TODO: listen on changes to this value
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//     const newColorScheme = e.matches ? "dark" : "light";
// });

const initialState: ThemeState = {
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
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
