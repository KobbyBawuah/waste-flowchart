import React from "react";
import styled from "@emotion/styled";
import {
  COMPOST,
  DISABLED_BUTTON_PURPLE,
  PRIMARY_BUTTON_PURPLE,
  WHITE,
} from "../theme/colors";
import { toast } from "react-toastify";
import ResultIcon from "./ResultIcon";

function mapResult(result) {
  switch (result) {
    case "garbage":
      return "garbage/waste";
    case "recycling":
      return "recycling";
    case "compost/organic waste":
      return COMPOST;
    default:
      return undefined;
  }
}

function Button({ label, result, onClick, disabled }) {
  function clickHandler() {
    onClick(label);
  }

  return (
    <StyledButton
      onClick={
        disabled
          ? () => {
              toast.info(`${label} belongs in ${mapResult(result)}!`, { position: "bottom-right" });
            }
          : clickHandler
      }
      color={disabled}
    >
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

  background-color: ${({ color }) =>
    color ? DISABLED_BUTTON_PURPLE : PRIMARY_BUTTON_PURPLE};

  border-radius: 4px;
  border: 1px solid #43384c;

  text-transform: capitalize;
`;

export default Button;
