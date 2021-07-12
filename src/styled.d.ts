import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
  }
}
