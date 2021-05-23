import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors";

const Bar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${colors.background};
`;

type ItemProps = {
  active?: boolean;
};

const Item = styled.li<ItemProps>`
  float: left;
  display: block;
  color: ${colors.foreground};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: ${(props) =>
    props.active ? colors.accent : colors.background};
`;

const Navbar = () => {
  return (
    <Bar>
        <NavLink to={"/"}>
          <Item active={true}>Home</Item>
        </NavLink>
        <NavLink to={"/about"}>
          <Item>About</Item>
        </NavLink>
        <NavLink to={"/links"}>
          <Item>Links</Item>
        </NavLink>
    </Bar>
  );
};

export default Navbar;
