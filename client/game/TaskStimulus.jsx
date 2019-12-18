import React from "react";
import RDK from "@empirica/random-dot-kinematogram";

export default class TaskStimulus extends React.Component {
  render() {
    const { round, stage, player } = this.props;

    return (
      <div className="task-stimulus">
        <RDK coherence={0.5} direction="right" />
      </div>
    );
  }
}
