import { Link } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Navbar = () => {
  return (
    <Bar>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/links"}>Links</Link>
    </Bar>
  );
};

export default Navbar;
