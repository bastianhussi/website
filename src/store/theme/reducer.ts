import { SET_THEME, Theme } from "./types";
import { ThemeAction, ThemeState } from "./types";

const lightTheme: Theme = {
  background: "#fff",
  foreground: "#fff",
  font: "#fff",
  accent: "#fff",
  brightAccent: "#fff",
};

const initialState: ThemeState = {
  theme: lightTheme,
};

export default function (
  state = initialState,
  action: ThemeAction
): ThemeState {
  switch (action.type) {
    case SET_THEME: {
      return {
        theme: action.payload,
      };
    }
    default:
      return state;
  }
}
