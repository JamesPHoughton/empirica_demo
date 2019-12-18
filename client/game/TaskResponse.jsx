import React from "react";

export default class TaskResponse extends React.Component {
  handleChange = direction => {
    const { player } = this.props;
    player.round.set("direction", direction);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="response-submitted">
          <h5>Waiting on other players...</h5>
          Please wait until all players are ready
        </div>
      </div>
    );
  }

  render() {
    const { player } = this.props;

    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    const direction = player.round.get("direction")
    return (
      <div className="task-response">

        <form onSubmit={this.handleSubmit}>
          <button type="button"
            onClick={() => this.handleChange("Left")}
            style={direction == "Left" ? {backgroundColor:"lightblue"} : null}
          > Left </button>

          <button type="button"
            onClick={() => this.handleChange("Right")}
            style={direction == "Right" ? {backgroundColor:"lightblue"} : null}
          > Right </button>

          <br/>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}
