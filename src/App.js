import "./App.css";
import React, { useState } from 'react'
import Button from "./componets/Button";
import Display from "./componets/Display";

//possible to creat object for terminal states

//Sample-->

// TERMINAL_IMAGE_FILES = {
//   "recycling": "../img/recycling",
//   "garbage": "../img/garbage"
// }

const FLOW_DATA = {
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

const breadcrumbs = ["snack-waste"]

function App() {
  return (
    <div>
      <h1>What kind of waste are you confused about?</h1>
      <Display initialValue={['snack-waste']} data={FLOW_DATA}/>
    </div>
  );
}

export default App;
