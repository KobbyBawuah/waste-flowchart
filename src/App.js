import "./App.css";
import { useState } from "react";
import Display from "./components/Display";
import WASTE_MAP from "./wasteMap.json";
import { WHITE } from "./theme/colors";

import styled from "@emotion/styled";

function App() {
  return <Display initialValue={WASTE_MAP} />;
}

export default App;
