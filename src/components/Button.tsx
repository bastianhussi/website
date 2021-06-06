import styled from "styled-components";
import { Theme } from "../themes";

enum VARIANT {
  PRIMARY,
  SECONDARY,
}

type Props = {
  variant?: VARIANT;
  theme: Theme;
};

const Button = styled.button<Props>`
  border-radius: 4px;
  ${(props) => {
    switch (props.variant) {
      case VARIANT.PRIMARY:
        return `
  background-color: ${props.theme.accent}`;
      case VARIANT.SECONDARY:
        return `background-color: ${props.theme.background}`;
    }
  }}
`;

export default Button;
