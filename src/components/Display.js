import { useState, useRef } from "react";
import {
  FaArrowAltCircleLeft,
  FaTimesCircle,
  FaTrashAlt,
  FaRecycle,
  FaLeaf,
} from "react-icons/fa";
import Button from "./Button";

import styled from "@emotion/styled";
import { WHITE } from "../theme/colors";

function Display({ initialValue }) {
  const [state, setState] = useState({
    previous: [],
    current: initialValue,
    title: "What kind of waste are you confused about?",
  });

  const resetTimeoutContainer = useRef(null);

  function resetHandler() {
    // set state to INITIAL_STATE
    setState({
      previous: [],
      current: initialValue,
      title: "What kind of waste are you confused about?",
    });
    if (resetTimeoutContainer.current) {
      clearTimeout(resetTimeoutContainer.current);
      resetTimeoutContainer.current = null;
    }
  }

  if (resetTimeoutContainer.current) {
    clearTimeout(resetTimeoutContainer.current);
    resetTimeoutContainer.current = null;
  }
  if (state.current !== initialValue) {
    resetTimeoutContainer.current = setTimeout(resetHandler, 30000);
  }

  function backButtonHandler() {
    let newCurrent = state.previous.pop();
    const key = Object.keys(newCurrent)[0];
    setState({
      previous: state.previous,
      current: newCurrent[key],
      title: key,
    });
  }

  const clickHandler = (option) => (label) => {
    setState({
      previous: [...state.previous, { [state.title]: state.current }],
      current: option,
      title: label,
    });
  };

  const { options } = state.current;

  return (
    <>
      <Header>{state.title}</Header>
      <Container className="button-display-container">
        {state.previous.length > 0 ? (
          // true
          <>
            <BackContainer onClick={backButtonHandler}>
              <FaArrowAltCircleLeft size={24} />
              Back
            </BackContainer>
            <ResetContainer onClick={resetHandler}>
              Reset
              <FaTimesCircle size={24} />
            </ResetContainer>
          </>
        ) : //false
        null}

        <LegendContainer>
          <table>
            <tbody>
              <tr>
                <LegendIconContainer>
                  <FaTrashAlt />
                </LegendIconContainer>
                <td>Waste</td>
              </tr>
              <tr>
                <LegendIconContainer>
                  <FaRecycle />
                </LegendIconContainer>
                <td>Recycle</td>
              </tr>
              <tr>
                <LegendIconContainer>
                  <FaLeaf />
                </LegendIconContainer>
                <td>Compost</td>
              </tr>
            </tbody>
          </table>
        </LegendContainer>

        {Object.keys(options).map(function (key) {
          return (
            <Button
              key={key}
              label={key}
              result={options[key].result}
              onClick={clickHandler(options[key])}
              disabled={!!options[key].result}
            />
          );
        })}
      </Container>
    </>
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

const ResetContainer = styled("div")`
  display: flex;
  gap: 12px;
  align-items: center;

  position: fixed;
  top: 16px;
  right: 12px;
  border: 1px solid ${WHITE};
  width: min-content;

  margin: 12px;
  padding: 8px;
  border-radius: 4px;
  color: ${WHITE};
`;

const LegendContainer = styled("div")`
  display: flex;
  gap: 12px;
  align-items: center;

  position: fixed;
  bottom: 16px;
  left: 12px;
  width: min-content;

  margin: 12px;
  padding: 8px;
  border-radius: 4px;
  color: ${WHITE};
`;

const LegendIconContainer = styled("td")`
  padding-top: 4px;
  padding-right: 8px;
`;

const Header = styled("h1")`
  color: ${WHITE};
  font-family: Rubik, Avenir Next, Helvetica Neue, sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;

export default Display;
