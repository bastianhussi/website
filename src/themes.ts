export type Theme = {
  background: string;
  foreground: string;
  white: string;
  black: string;
  grey: string;
  blue: string;
  brightBlue: string;
  green: string;
  brightGreen: string;
  red: string;
  brightRed: string;
  yellow: string;
  brightYellow: string;
};

export const lightTheme: Theme = {
  background: "#EAE8F1",
  foreground: "#020204",
  white: "#EAE8F1",
  black: "#020204",
  grey: "#CDC8DE",
  blue: "#6C5D9B",
  brightBlue: "#887BB0",
  green: "#60C4C2",
  brightGreen: "#85D2D0",
  red: "#ED8D8C",
  brightRed: "#F4B9B8",
  yellow: "#FFEC8A",
  brightYellow: "#FFF4BD",
};

export const darkTheme: Theme = {
  background: "#020204",
  foreground: "#EAE8F1",
  white: "#EAE8F1",
  black: "#020204",
  grey: "#2f2944",
  blue: "#887BB0",
  brightBlue: "#6C5D9B",
  green: "#85D2D0",
  brightGreen: "#60C4C2",
  red: "#F4B9B8",
  brightRed: "#ED8D8C",
  yellow: "#FFF4BD",
  brightYellow: "#FFEC8A",
};
