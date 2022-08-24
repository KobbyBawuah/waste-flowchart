import { useState, useRef } from "react";
import {
  FaArrowAltCircleLeft,
  FaTimesCircle,
  FaTrashAlt,
  FaRecycle,
  FaLeaf,
  FaHeadphones,
} from "react-icons/fa";
import Button from "./Button";

import styled from "@emotion/styled";
import { BACKGROUND, WHITE } from "../theme/colors";
import { EditDisplay } from "./EditDisplay";

function Display({ initialValue, onSaveHandler }) {
  const [state, setState] = useState({
    previous: [],
    current: initialValue,
    title: "What kind of waste are you confused about?",
    editMode: false,
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
      {" "}
      {!state.editMode ? (
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
              <LegendTable>
                <tbody>
                  <tr>
                    <td>
                      <LegendIconContainer>
                        <FaTrashAlt /> Garbage
                      </LegendIconContainer>
                    </td>
                    <td>
                      <LegendIconContainer>
                        <FaRecycle /> Recycle
                      </LegendIconContainer>
                    </td>
                    <td>
                      <LegendIconContainer>
                        <FaLeaf /> Compost
                      </LegendIconContainer>
                    </td>
                  </tr>
                </tbody>
              </LegendTable>
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
          <EditContainer>
            <EditButton
              onClick={() => {
                setState({ ...state, editMode: true });
              }}
            >
              Edit
            </EditButton>
          </EditContainer>
        </>
      ) : (
        <>
          <Header>Edit</Header>
          <EditDisplay
            data={initialValue}
            onSaveHander={onSaveHandler}
          />
        </>
      )}
    </>
  );
}

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
  padding-bottom: 80px;
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
  width: 100%;
  gap: 12px;
  align-items: center;

  position: fixed;
  bottom: 0px;
  left: 0px;

  padding: 20px;
  color: ${WHITE};
  background-color: ${BACKGROUND};
`;

const LegendIconContainer = styled("div")`
  padding-top: 4px;
  padding-right: 8px;
`;

const LegendTable = styled("table")`
  text-align: center;
  width: 100%;
`;

const Header = styled("h1")`
  color: ${WHITE};
  font-family: Rubik, Avenir Next, Helvetica Neue, sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;

  height: 100px;
  margin: 0;
  padding: 0 20px;
  background-color: ${BACKGROUND};
`;

const EditContainer = styled("div")`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
const EditButton = styled("button")`
  height: 100px;
  width: 100px;
  opacity: 0;
`;

export default Display;
