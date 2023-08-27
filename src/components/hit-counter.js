import * as React from "react";
import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

function HitCounter() {
  const { hits } = JSON.parse(readFile(DATABASE_PATH));

  const newHits = {
    hits: hits + 1,
  };

  writeFile(DATABASE_PATH, JSON.stringify(newHits));

  return hits;
}

export default HitCounter;
