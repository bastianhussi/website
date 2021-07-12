import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme as Colors } from "styled-components";
import { lightTheme, darkTheme } from "../../themes";

// Define a type for the slice state
interface ThemeState {
  dark: boolean;
  colors: Colors;
}

const systemDarkTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const getPreferedColors = (darkColors: boolean) =>
  darkColors ? darkTheme : lightTheme;

const initialState: ThemeState = {
  dark: systemDarkTheme,
  colors: getPreferedColors(systemDarkTheme),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.dark = true;
      state.colors = getPreferedColors(true);
    },
    setLightTheme: (state) => {
      state.dark = false;
      state.colors = getPreferedColors(false);
    },
    toggleTheme: (state) => {
      const opposite = !state.dark;
      state.dark = opposite;
      state.colors = getPreferedColors(opposite);
    },
  },
});

export const { setDarkTheme, setLightTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
