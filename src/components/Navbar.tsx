import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Switch from "./Switch";
import { useAppSelector, useAppDispatch } from "../hooks";
import { toggleTheme } from "../features/theme/themeSlice";

const Link = styled(NavLink)`
  display: block;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.white};

  &.active {
    background-color: ${({ theme }) => theme.brightBlue};
    font-weight: bold;
  }
  &:hover {
    backgreund-color: ${({ theme }) => theme.brightBlue};
  }
`;

const Bar = styled.ul`
  display: flex;
  justify-content: left;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.blue};

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
  const darkTheme = useAppSelector((state) => state.theme.dark);
  const dispatch = useAppDispatch();

  return (
    <Bar>
      <Link exact={true} to={"/"}>
        Home
      </Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/links"}>Links</Link>
      <ThemeSwitcher>
        <Switch checked={darkTheme} onChange={() => dispatch(toggleTheme())} />
      </ThemeSwitcher>
    </Bar>
  );
};

export default Navbar;
