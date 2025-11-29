import assert from "assert";

import { serviceListEpisodes } from "../src/services/list-episodes-service";
import { serviceFilterEpisodes } from "../src/services/filter-episodes-service";

async function run() {
  // Teste listagem
  const list = await serviceListEpisodes();
  assert.ok(Array.isArray(list.body), "Listagem deve retornar um array");

  // Teste filtro usando podcastName=flow (lista contém item com podcastName 'flow')
  const filtered = await serviceFilterEpisodes("/episode?podcastName=flow");
  assert.ok(Array.isArray(filtered.body), "Filtro deve retornar um array");
  assert.ok(filtered.body.length >= 1, "Filtro por 'flow' deve retornar pelo menos 1 item");

  console.log("All tests passed");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
