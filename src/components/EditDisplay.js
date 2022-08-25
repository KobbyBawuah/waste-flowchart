import { useState } from "react";
import styled from "@emotion/styled";

export function EditDisplay({ data, onSaveHandler }) {
  const [state, setState] = useState(JSON.stringify(data, undefined, 4));
  return (
    <Container>
      <StyledTextArea
        onChange={(event) => setState(event.target.value)}
        autoFocus
      >
        {state}
      </StyledTextArea>
      <button
        onClick={() => {
          try {
            const json = JSON.parse(state);
            window.localStorage.setItem("wasteMap", state);
            onSaveHandler(json);
          } catch (_) {
            return false;
          }
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          const result = confirm("Are you sure you want to reset app data?");
          if (result) {
            window.localStorage.removeItem("wasteMap");
            window.location.reload();
          }
        }}
      >
        Reset
      </button>
    </Container>
  );
}

const Container = styled("div")`
  height: 600px;
`;

const StyledTextArea = styled("textarea")`
  width: 100%;
  height: 100%;
  padding: 12px;
`;
