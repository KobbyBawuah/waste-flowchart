import React, { Component } from "react";
import Button from "./Button";


class Display extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      previous: [],
      current: this.props.initialValue, // ['snack-waste']
      terminal: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.data = this.props.data;
  }

  clickHandler(label) {
    console.log(label);
    console.log(this.data[label]);
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
      console.log("options:");
      console.log(nextSteps["options"]);

      // this below re-renders the screen
      this.setState({
        previous: this.state.previous.concat(label),
        current: nextSteps["options"],
      });
    }
  }

  render() {
    let clickHandler = this.clickHandler;
    console.log(this.state);
    // only show back button if previous is not empty
    // return  <Button label={this.state.current[0]} onClick={1}></Button>;

    // whatever you like
    // loop through current to make all buttons

    const elements = this.state.current;
    if (this.state.terminal) {
      return <div>
        <h1>WE DONEZO</h1>
      </div>

      // pick icon;
    } else {
      return [
        <div className="playlist-items-container" key={101010}>
          {console.log(elements)}
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
