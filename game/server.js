/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Server, Origins } from "boardgame.io/server";
import { Baca } from "./Game";

const PORT = process.env.PORT || 8000;
const server = Server({
  games: [Baca],
  origins: [Origins.LOCALHOST],
});
server.run(PORT, () => {
  console.log(`Serving at: http://localhost:${PORT}`);
});

// To run node -r esm src/server.js
