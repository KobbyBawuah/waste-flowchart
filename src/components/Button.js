import React from "react";
import styled from "@emotion/styled";
import { DISABLED_BUTTON_PURPLE, PRIMARY_BUTTON_PURPLE, WHITE } from "../theme/colors";
import ResultIcon from "./ResultIcon";

function Button({label, icon, onClick, disabled}) {

  function clickHandler() {
    onClick(label);
  }

  return (
    <StyledButton onClick={disabled ? null : clickHandler} disabled={disabled}>
      {label} <ResultIcon icon={icon} />
    </StyledButton>
  );
}

const StyledButton = styled(`button`)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  margin: 12px;
  width: 20rem;
  height: 10rem;

  color: ${WHITE};
  font-size: xx-large;
  font-family: Rubik, Avenir Next, Helvetica Neue, sans-serif;
  font-weight: 600;

  background-color: ${({disabled}) => disabled ? DISABLED_BUTTON_PURPLE : PRIMARY_BUTTON_PURPLE};

  border-radius: 4px;
  border: 1px solid #43384c;
`;

export default Button;
