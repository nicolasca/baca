import React from "react";

import { Client } from "boardgame.io/react";

import { Local, SocketIO } from "boardgame.io/multiplayer";
import { TicTacToe } from "../../game/Game";
import TicTacToeBoard from "./board.component";

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  debug: false,
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
        <TicTacToeClient playerID={this.state.playerID} />
      </div>
    );
  }
}

export default App;
