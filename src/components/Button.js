import React from "react";
import styled from "@emotion/styled";
import { PRIMARY_BUTTON_PURPLE, WHITE } from "../theme/colors";
import ResultIcon  from "./ResultIcon";

class Button extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      label: this.props.label, // 'snack-waste'
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.onClick(this.props.label);
  }

  render() {
    let clickHandler = this.clickHandler;
    return (
      <StyledButton onClick={clickHandler}>
        {this.state.label} <ResultIcon icon={this.props.icon} />
      </StyledButton>
    );
  }
}

const StyledButton = styled(`button`)`
  margin: 12px;
  width: 20rem;
  height: 10rem;

  color: ${WHITE};
  font-size: xx-large;
  font-family: Rubik, Avenir Next, Helvetica Neue, sans-serif;
  font-weight: 600;

  background-color: ${PRIMARY_BUTTON_PURPLE};

  border-radius: 4px;
  border: 1px solid #43384c;
`;

export default Button;
