import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors";

const Bar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${colors.purple};
`;

const Item = styled(NavLink)`
  float: left;
  display: block;
  color: ${colors.white};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &.active {
   background-color: ${(props) => colors.brightPurple};
  }
  &:hover {
    background-color: ${colors.brightPurple};
  }
`;

const Navbar = () => {
  return (
    <Bar>
      <Item exact={true} to={"/"}> Home</Item>
      <Item to={"/about"}> About</Item>
      <Item to={"/links"}> Links</Item>
    </Bar>
  );
};

export default Navbar;
