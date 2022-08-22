import { useState } from "react";
import Button from "./Button";

import styled from "@emotion/styled";

function Display({ initialValue }) {
  const [state, setState] = useState({
    previous: [],
    current: initialValue,
  });

  function resetHandler() {
    // set state to INITIAL_STATE
    setState({
      previous: [],
      current: initialValue,
    });
  }

  function backButtonHandler() {
    // check parent, check parent of parent

    let newCurrent = state.previous.pop();
    setState({
      previous: state.previous,
      current: newCurrent,
    });
  }

  const clickHandler = (option) => (label) => {
    setState({
      previous: [...state.previous, state.current],
      current: option,
    });
  };

  function pickIcon() {
    // const TERMINAL_IMAGE_FILES = {
    //   recycling: "../img/recycling",
    //   garbage: "../img/garbage",
    // };

    return state.current["result"];

    // The goal
    // const result = this.data[terminalElement]["result"];
    // return TERMINAL_IMAGE_FILES[result];
  }

  const { result, options } = state.current;
  if (result) {
    // pick icon;
    return (
      <Container>
        <h1>WE DONEZO</h1>
        {console.log(pickIcon())}
        <button onClick={resetHandler}>Reset</button>
      </Container>
    );
  }

  return (
    <Container className="button-display-container">
      {state.previous.length > 0 ? (
        // true
        <BackContainer>
          <button onClick={backButtonHandler}>Go back</button>
        </BackContainer>
      ) : //false
      null}

      {Object.keys(options).map(function (key, index) {
        return (
          <Button
            key={key}
            label={key}
            icon={options[key].result}
            onClick={clickHandler(options[key])}
          />
        );
      })}
    </Container>
  );
}

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
`;

const BackContainer = styled("div")`
  margin: 12px;
  width: 100%;
`;

export default Display;
