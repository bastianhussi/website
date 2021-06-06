import styled from "styled-components";
import { ThemeState } from "../store/theme/types";

const Box = styled.div<ThemeState>`
  padding: 10px;
  background-color: ${(props) => props.theme.grey};
  width: 50%;
  margin: 0 auto;
  border-radius: 6px;
  @media (max-width: 600px) {
    width: auto;
    margin: 0 10px;
  }
`;

export default Box;
