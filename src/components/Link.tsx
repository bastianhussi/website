import styled from "styled-components";

const Link = styled.a`
  color: ${({ theme }) => theme.red};
  text-decoration: none;
  /* unvisited */
  &:link {
    color: ${({ theme }) => theme.red};
  }
  &:visited {
    color: ${({ theme }) => theme.foreground};
  }
  &:hover {
    color: ${({ theme }) => theme.brightRed};
  }
  &:active {
    color: ${({ theme }) => theme.red};
  }
`;

export default Link;
