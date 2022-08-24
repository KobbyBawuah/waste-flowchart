import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import WASTE_MAP from "./wasteMap.json";

function loadWasteMap() {
  let storedWasteMap;
  try {
    storedWasteMap = JSON.parse(window.localStorage.getItem("wasteMap"));
  } catch (_) {}
  return storedWasteMap;
}

function App() {
  const [state, setState] = useState(loadWasteMap() ?? WASTE_MAP);
  return (
    <Display
      initialValue={state}
      onSaveHander={setState}
    />
  );
}

export default App;
