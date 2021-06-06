import styled from "styled-components";
import { ThemeState } from "../store/theme/types";

export const Heading1 = styled.h1<ThemeState>`
  color: ${(props) => props.theme.green};
  text-align: center;
`;

export const Heading2 = styled.h2<ThemeState>`
  color: ${(props) => props.theme.brightGreen};
  text-align: center;
`;

export const UnorderdList = styled.ul`
  list-style-type: none;
`;
