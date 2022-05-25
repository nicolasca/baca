import { Lobby } from "boardgame.io/react";
import { TicTacToe } from "../../game/Game";

export default function LobbyComponent() {
  <Lobby
    gameServer={`https://localhost:8000`}
    lobbyServer={`https://localhost:8000`}
    gameComponents={[{ game: TicTacToe }]}
  />;
}
