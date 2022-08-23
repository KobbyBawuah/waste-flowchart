import React from "react";
import styled from "@emotion/styled";
import { COMPOST, DISABLED_BUTTON_PURPLE, PRIMARY_BUTTON_PURPLE, RECYCLING, WASTE, WHITE } from "../theme/colors";
import ResultIcon from "./ResultIcon";

function mapResultToColor(result) {
  switch (result) {
    case "garbage":
      return WASTE;
    case "recycling":
      return RECYCLING;
    case "organic":
      return COMPOST
    default:
      return undefined;
  }
}

function Button({label, result, onClick, disabled}) {
  function clickHandler() {
    onClick(label);
  }

  return (
    <StyledButton onClick={disabled ? null : clickHandler} disabled={disabled} color={mapResultToColor(result)}>
      {label} <ResultIcon icon={result} />
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

  background-color: ${({disabled, color}) => disabled ? DISABLED_BUTTON_PURPLE : PRIMARY_BUTTON_PURPLE};

  border-radius: 4px;
  border: 1px solid #43384c;
`;

export default Button;
