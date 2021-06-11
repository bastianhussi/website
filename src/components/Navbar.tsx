import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Switch from "./Switch";
import { AppDispatch } from "../store";
import { setTheme } from "../store/theme/actions";
import { ThemeState } from "../store/theme/types";
import { darkTheme, lightTheme } from "../themes";

// TODO: improve behavior on small screen sizes
const Bar = styled.ul<ThemeState>`
  display: flex;
  justify-content: left;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.blue};

  @media (max-width: 600px) {
    flex-flow: column wrap;
  }
`;

const Item = styled.div.attrs(() => ({
  align: "left",
}))<ThemeState>`
  align-self: ${(props) => props.align};
  display: block;
  text-align: center;
  padding: 14px 16px;
`;

const Link = styled(NavLink)`
  color: ${(props) => props.theme.white};
  text-decoration: none;
  &.active {
    background-color: ${(props) => props.theme.brightBlue};
    font-weight: bold;
  }
  &:hover {
    backgreund-color: ${(props) => props.theme.brightBlue};
  }
`;

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const toggleTheme = () => {
    setChecked(!checked);

    dispatch(setTheme(checked ? lightTheme : darkTheme));
  };

  return (
    <Bar>
      <Item>
        <Link exact={true} to={"/"}>
          Home
        </Link>
      </Item>
      <Item>
        <Link to={"/about"}>About</Link>
      </Item>
      <Item>
        <Link to={"/links"}>Links</Link>
      </Item>
      <Item align={"right"}>
        <Switch checked={checked} onChange={toggleTheme} />
      </Item>
    </Bar>
  );
};

export default Navbar;
