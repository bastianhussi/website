import styled from "styled-components";

const Box = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.grey};
  width: 50%;
  margin: 0 auto;
  border-radius: 6px;
  @media (max-width: 600px) {
    width: auto;
    margin: 0 10px;
  }
`;

export default Box;
