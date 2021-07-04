import styled from "styled-components";
import Link from "./Link";
import { ThemeState } from "../store/theme/types";

const Bar = styled.footer<ThemeState>`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.blue};
  text-align: center;
  margin-top: 10px;
  height: 50px;

  & * {
    padding: 0px 5px;
  }
`;

const Item = styled.div`
  padding: 12px;
`;

const Footer = () => {
  return (
    <Bar>
      <Item>{new Date().getFullYear()}</Item>
      <Item>
        Made with{" "}
        <Link href="https://reactjs.org/" target="_blank">
          React.js
        </Link>
      </Item>
    </Bar>
  );
};

export default Footer;
