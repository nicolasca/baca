import React from "react";
import { PHASES } from "../../game/Game";
import ChooseDeck from "./ChooseDeck/chooseDeck";

export default function BacaBoard({ ctx, G, moves, playerID }) {
  console.log(G);

  let boardToDisplay = "";

  switch (ctx.phase) {
    case PHASES.CHOOSE_DECK:
      boardToDisplay = <ChooseDeck />;
      break;
    default:
      boardToDisplay = "No phase !";
  }
  console.log(boardToDisplay);
  return <div>{boardToDisplay}</div>;
}
