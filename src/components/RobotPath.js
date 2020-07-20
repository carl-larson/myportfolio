import React, { Component } from "react";
var html = require('./projects/classAPI/RobotWar.js');
var template = {__html: html};

class RobotPath extends Component {
  render() {
    return (
      <div className="robot-path">
        <h1>Robots!</h1>
        <div dangerouslySetInnerHTML={template} />
      </div>
    );
  }
}
export default RobotPath;