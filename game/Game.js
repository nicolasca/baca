/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Stage } from "boardgame.io/core";

export const PHASES = {
  CHOOSE_DECK: "choose-deck",
  DEPLOYMENT: "deployment",
};

export const Baca = {
  name: "Baca",
  numPlayers: 2,

  setup: () => ({
    decks: Array(2).fill(null),
    hands: Array(2).fill(null),
    field: Array(2).fill(null),
    cells: Array(9).fill(null),
  }),

  phases: {
    [PHASES.CHOOSE_DECK]: {
      start: true,
      next: PHASES.DEPLOYMENT,
      turn: {
        activePlayers: { all: Stage.NULL },
      },
      moves: {
        setDeck: (G, ctx, deck, playerID) => {
          G.decks[playerID] = deck;

          const hand = [];

          for (
            let itemNumber = 0;
            itemNumber < deck.cartes.length;
            itemNumber++
          ) {
            const item = deck.cartes[itemNumber];
            for (let number = 0; number < item.count; number++) {
              const cardCopy = { ...item.carte };
              let carteGameId = `${itemNumber}-${number}`;
              cardCopy["gameCardId"] = carteGameId;
              hand.push(cardCopy);
            }
          }
          G.hands[playerID] = hand;
        },
      },
      endIf: (G) => G.decks.every((i) => i !== null),
    },
  },
};
