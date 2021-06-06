import styled from "styled-components";
import { ThemeState } from "../store/theme/types";

const Footer = styled.footer<ThemeState>`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: baseline;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.blue};
  text-align: center;
  margin-top: 10px;
  height: 50px;
`;

export default Footer;
