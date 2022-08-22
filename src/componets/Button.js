// import React, { Component } from 'react'

// const Button = (props) =>{
//     console.log(props.label);
//     // figure out how to pass label
//     return(
//         <button onClick = {props.onClick}>
//             {props.label}
//         </button>
//     );
// };

// export default Button;

import React, { Component } from "react";

import FLOW_DATA from "../App";

class Button extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      label: this.props.label, // 'snack-waste'
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.onClick(this.props.label);
  }

  render() {
    let clickHandler = this.clickHandler;
    return(
        <button onClick = {clickHandler}>
            {this.state.label}
        </button>
    );
  }
}

export default Button;
