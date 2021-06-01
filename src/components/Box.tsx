import styled from "styled-components";
import colors from "../colors";

const Box = styled.div`
  padding: 10px;
  background-color: ${colors.accent};
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: auto;
    margin: 0 10px;
  }
`;

export default Box;
