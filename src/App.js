import "./App.css";
import React from "react";
import Display from "./componets/Display";

const TEST_FLOW_DATA = {
  "snack-waste": {
    terminal: false,
    options: ["chip-bag", "aluminum-foil", "yogurt"],
    icon: "../img/file", //find images
  },
  "chip-bag": {
    terminal: true,
    result: "recycling",
    icon: "../img/file",
  },
  "aluminum-foil": {
    terminal: true,
    result: "garbage",
    icon: "../img/file",
  },
  yogurt: {
    terminal: false,
    options: ["yogurt-lid", "yogurt-container"],
    icon: "../img/file",
  },
  "yogurt-lid": {
    terminal: true,
    result: "garbage",
    icon: "../img/file",
  },
  "yogurt-container": {
    terminal: true,
    result: "recycling",
    icon: "../img/file",
  },
};

function App() {
  return (
    <div>
      <h1>What kind of waste are you confused about?</h1>
      <Display initialValue={["snack-waste"]} data={TEST_FLOW_DATA} />
    </div>
  );
}

export default App;
