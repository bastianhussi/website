import styled from "styled-components";
import colors from "../colors";

const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: baseline;
  flex-shrink: 0;
  background-color: ${colors.accent};
  text-align: center;
  margin-top: 10px;
  height: 50px;
`;

export default Footer;
