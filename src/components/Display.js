import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Button from "./Button";

import styled from "@emotion/styled";
import { WHITE } from "../theme/colors";

function Display({ initialValue, setTitle, title }) {
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
    const key = Object.keys(newCurrent)[0];
    setState({
      previous: state.previous,
      current: newCurrent[key],
    });
    setTitle(key);
  }

  const clickHandler = (option, key) => (label) => {
    setState({
      previous: [...state.previous, { [key]: state.current }],
      current: option,
    });
    setTitle(label);
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
        <BackContainer onClick={backButtonHandler}>
          <FaArrowAltCircleLeft size={24} />
          Back
        </BackContainer>
      ) : //false
      null}

      {Object.keys(options).map(function (key) {
        return (
          <Button
            key={key}
            label={key}
            result={options[key].result}
            onClick={clickHandler(options[key], title)}
            disabled={!!options[key].result}
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
  display: flex;
  gap: 12px;
  align-items: center;

  position: fixed;
  top: 16px;
  left: 12px;
  border: 1px solid ${WHITE};
  width: min-content;

  margin: 12px;
  padding: 8px;
  border-radius: 4px;
  color: ${WHITE};
`;

export default Display;
