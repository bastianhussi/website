import styled from "styled-components";
import colors from "../colors";

export const Heading1 = styled.h1`
  color: ${colors.accent};
  text-align: center;
`;

export const Heading2 = styled.h2`
  color: ${colors.accent};
  text-align: center;
`;

export const UnorderdList = styled.ul`
  list-style-type: none;
`;

export const Link = styled.a`
  color: hotpink;
  text-decoration: none;
  /* unvisited */
  &:link {
    color: hotpink;
  }
  &:visited {
    color: blue;
  }
  &:hover {
    color: hotpink;
  }
  &:active {
    color: hotpink;
  }
`;
