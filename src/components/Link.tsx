import styled from "styled-components";
import { ThemeState } from "../store/theme/types";

const Link = styled.a<ThemeState>`
  color: ${(props) => props.theme.red};
  text-decoration: none;
  /* unvisited */
  &:link {
    color: ${(props) => props.theme.red};
  }
  &:visited {
    color: ${(props) => props.theme.foreground};
  }
  &:hover {
    color: ${(props) => props.theme.brightRed};
  }
  &:active {
    color: ${(props) => props.theme.red};
  }
`;

export default Link;
