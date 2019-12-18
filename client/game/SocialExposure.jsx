import React from "react";


export default class SocialExposure extends React.Component {
  renderSocialInteraction(otherPlayer) {
    const value = otherPlayer.round.get("direction");
    return (
      <div className="alter" key={otherPlayer._id}>
        <img src={otherPlayer.get("avatar")} className="profile-avatar" />
        <div className="range">
          <h3> {value} </h3>
        </div>
      </div>
    );
  }

  render() {
    const { game, player } = this.props;

    const otherPlayers = _.reject(game.players, p => p._id === player._id);

    if (otherPlayers.length === 0) {
      return null;
    }

    return (
      <div className="social-exposure">
        <p>
          <strong>There are {otherPlayers.length} other players:</strong>
        </p>
        {otherPlayers.map(p => this.renderSocialInteraction(p))}
      </div>
    );
  }
}
