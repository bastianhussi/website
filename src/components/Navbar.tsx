import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppDispatch } from "../store";
import { setTheme } from "../store/theme/actions";
import { ThemeState } from "../store/theme/types";
import { darkTheme, lightTheme } from "../themes";

const Bar = styled.ul<ThemeState>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.blue};
`;

const Item = styled(NavLink)<ThemeState>`
  float: left;
  display: block;
  color: ${(props) => props.theme.white};
  text-align: center;
  padding: 14px 16px;
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
      <Item exact={true} to={"/"}>
        {" "}
        Home
      </Item>
      <Item to={"/about"}> About</Item>
      <Item to={"/links"}> Links</Item>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleTheme}
        style={{ float: "right" }}
      />
    </Bar>
  );
};

export default Navbar;
