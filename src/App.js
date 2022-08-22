import "./App.css";
import React from "react";
import Display from "./components/Display";
import WASTE_MAP from "./wasteMap.json";
import { WHITE } from "./theme/colors";

import styled from "@emotion/styled";

function App() {
  return (
    <div>
      <Header>What kind of waste are you confused about?</Header>
      <Display initialValue={WASTE_MAP} />
    </div>
  );
}

const Header = styled("h1")`
  color: ${WHITE};
  font-family: Rubik, Avenir Next, Helvetica Neue, sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;

export default App;
