import { useState } from "react";
import styled from "@emotion/styled";

export function EditDisplay({ data, onSaveHandler }) {
    const [state, setState] = useState(JSON.stringify(data, undefined, 4));
  return (
    <Container>
      <StyledTextArea onChange={(event) => setState(event.target.value)}>{state}</StyledTextArea>
      <SaveButton onClick={() => {
          try {
            const json = JSON.parse(state);
            window.localStorage.setItem('wasteMap', state)
            onSaveHandler(json);
          } catch (_) {
            return false;
          }
      }}>Save</SaveButton>
      <button onClick={() => {window.location.reload()}}>Back</button>
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

const SaveButton = styled("button")`
`
