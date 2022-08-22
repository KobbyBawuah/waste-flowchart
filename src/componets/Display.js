import React from "react";
import Button from "./Button";

class Display extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.INITIAL_STATE = {
      previous: [],
      current: this.props.initialValue, // ['snack-waste']
      terminal: false,
    };
    this.state = this.INITIAL_STATE;

    this.clickHandler = this.clickHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.backButtonHandler = this.backButtonHandler.bind(this);
    this.pickIcon = this.pickIcon.bind(this);
    this.data = this.props.data;
  }

  resetHandler() {
    // set state to INITIAL_STATE
    this.setState(this.INITIAL_STATE);
  }

  backButtonHandler() {
    // check parent, check parent of parent

    let currentPrevious = this.state.previous;
    let newCurrent = [];

    if (currentPrevious.length >= 2) {
      newCurrent =
        this.data[currentPrevious[currentPrevious.length - 2]]["options"];
      currentPrevious.pop();
      this.setState({ previous: currentPrevious, current: newCurrent });
    } else if (currentPrevious.length === 1) {
      // 1 level left
      this.resetHandler();
    }
    console.log(currentPrevious);
    console.log(newCurrent);
  }

  clickHandler(label) {
    const nextSteps = this.data[label];
    if (nextSteps["terminal"]) {
      // terminal
      console.log("terminal");

      // change to terminal state
      console.log(this.state.previous);
      this.setState({
        terminal: true,
        previous: this.state.previous.concat(label),
        current: [],
      });
    } else {
      // not terminal
      console.log("not terminal");

      this.setState({
        previous: this.state.previous.concat(label),
        current: nextSteps["options"],
      });
    }
  }

  pickIcon() {
    // const TERMINAL_IMAGE_FILES = {
    //   recycling: "../img/recycling",
    //   garbage: "../img/garbage",
    // };

    const terminalElement = this.state.previous[this.state.previous.length - 1];
    return this.data[terminalElement]["result"];

    // The goal 
    // const result = this.data[terminalElement]["result"];
    // return TERMINAL_IMAGE_FILES[result];
  }

  render() {
    let clickHandler = this.clickHandler;
    let resetHandler = this.resetHandler;
    let backButtonHandler = this.backButtonHandler;
    let pickIcon = this.pickIcon;

    const elements = this.state.current;
    if (this.state.terminal) {
      // pick icon;
      return (
        <div>
          <h1>WE DONEZO</h1>
          {console.log(pickIcon())}
          <button onClick={resetHandler}>Reset</button>
        </div>
      );
    } else {
      return [
        <div className="button-display-container" key={101010}>
          {this.state.previous.length > 0 ? (
            // true
            <button onClick={backButtonHandler}>Go back</button>
          ) : //false
          null}

          {elements.map(function (element, index) {
            return (
              <Button
                label={element}
                key={Math.random() + index}
                onClick={clickHandler}
              />
            );
          })}
        </div>,
      ];
    }
  }
}

export default Display;
