import assert from "assert";

import * as PlayersService from "../src/services/players-service";
import * as ClubsService from "../src/services/clubs-service";

async function run() {
  // lista de players
  const listResp = await PlayersService.getPlayerService();
  assert.ok(listResp && Array.isArray(listResp.body), "getPlayerService deve retornar array no body");

  // buscar player por id (1 existe no dataset)
  const byId = await PlayersService.getPlayerByIdService(1);
  assert.ok(byId && byId.body, "getPlayerByIdService deve retornar body para id existente");

  // clubes
  const clubs = await ClubsService.getClubService();
  assert.ok(clubs && Array.isArray(clubs.body), "getClubService deve retornar array no body");

  console.log("All tests passed");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
