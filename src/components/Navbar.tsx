import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Switch from "./Switch";
import { AppDispatch } from "../store";
import { setTheme } from "../store/theme/actions";
import { ThemeState } from "../store/theme/types";
import { darkTheme, lightTheme } from "../themes";

const Link = styled(NavLink)`
  display: block;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  color: ${(props) => props.theme.white};

  &.active {
    background-color: ${(props) => props.theme.brightBlue};
    font-weight: bold;
  }
  &:hover {
    backgreund-color: ${(props) => props.theme.brightBlue};
  }
`;

const Bar = styled.ul<ThemeState>`
  display: flex;
  justify-content: left;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.blue};

  @media (max-width: 300px) {
    flex-flow: column wrap;
    & ${Link} {
      width: 100%;
      padding: 12px 0px;
    }
  }
`;

const ThemeSwitcher = styled.div`
  margin-left: auto;
  margin-right: 12px;

  @media (max-width: 600px) {
    display: none;
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
      <Link exact={true} to={"/"}>
        Home
      </Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/links"}>Links</Link>
      <ThemeSwitcher>
        <Switch checked={checked} onChange={toggleTheme} />
      </ThemeSwitcher>
    </Bar>
  );
};

export default Navbar;
