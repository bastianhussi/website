import styled from "styled-components";
import colors from "../colors";

export const Heading1 = styled.h1`
  color: ${colors.blue};
  text-align: center;
`;

export const Heading2 = styled.h2`
  color: ${colors.blue};
  text-align: center;
`;

export const UnorderdList = styled.ul`
  list-style-type: none;
`;

export const Link = styled.a`
  color: ${colors.yellow};
  text-decoration: none;
  /* unvisited */
  &:link {
    color: ${colors.yellow};
  }
  &:visited {
    color: ${colors.yellow};
  }
  &:hover {
    color: ${colors.brightYellow};
  }
  &:active {
    color: ${colors.yellow};
  }
`;
