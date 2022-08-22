import React, { Component } from "react";
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
    this.data = this.props.data;
  }

  resetHandler() {
    // set state to INITIAL_STATE
    this.setState(this.INITIAL_STATE);
  }

  backButtonHandler() {
    // check parent, check parent of parent
    console.log("--------------");
    let currentPrevious = this.state.previous;
    let newCurrent = [];

    if (currentPrevious.length >= 2) {
      console.log(currentPrevious[currentPrevious.length - 2]);
      newCurrent =
        this.data[currentPrevious[currentPrevious.length - 2]]["options"];
      currentPrevious.pop();
      this.setState({ previous: currentPrevious, current: newCurrent });
    } else if (currentPrevious.length == 1) {
      this.resetHandler();
      // newCurrent = this.data[currentPrevious[0]];
      // currentPrevious = [];
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
      this.setState({ terminal: true });
    } else {
      // not terminal
      console.log("not terminal");

      // get options
      // console.log("options:");
      // console.log(nextSteps["options"]);

      // this below re-renders the screen
      this.setState({
        previous: this.state.previous.concat(label),
        current: nextSteps["options"],
      });
    }
  }

  render() {
    let clickHandler = this.clickHandler;

    // only show back button if previous is not empty
    // return  <Button label={this.state.current[0]} onClick={1}></Button>;

    // whatever you like
    // loop through current to make all buttons
    let resetHandler = this.resetHandler;
    let backButtonHandler = this.backButtonHandler;

    const elements = this.state.current;
    if (this.state.terminal) {
      return (
        <div>
          <h1>WE DONEZO</h1>
          <button onClick={resetHandler}>Reset</button>
        </div>
      );

      // pick icon;
    } else {
      return [
        <div className="playlist-items-container" key={101010}>
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
