import React from "react";

import { Client } from "boardgame.io/react";

import { Local, SocketIO } from "boardgame.io/multiplayer";
import { Baca } from "../../game/Game";
import BacaBoard from "./board.component";

const BacaClient = Client({
  game: Baca,
  board: BacaBoard,
  debug: false,
  numPlayers: 2,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

class App extends React.Component {
  state = { playerID: null };

  render() {
    if (this.state.playerID === null) {
      return (
        <div>
          <p>Play as</p>
          <button onClick={() => this.setState({ playerID: "0" })}>
            Player 0
          </button>
          <button onClick={() => this.setState({ playerID: "1" })}>
            Player 1
          </button>
        </div>
      );
    }
    return (
      <div>
        <BacaClient playerID={this.state.playerID} />
      </div>
    );
  }
}

export default App;
