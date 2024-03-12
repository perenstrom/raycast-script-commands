#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Pollenkollen: Hassel
// @raycast.mode inline
// @raycast.refreshTime 3h

// Optional parameters:
// @raycast.icon 🌼

// Documentation:
// @raycast.author Per Enström
// @raycast.authorURL https://github.com/perenstrom

const POLLEN_ID = "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323233";
const REGION_ID = "2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a32";
const BASE_URL = "https://api.pollenrapporten.se/v1";
const pollenMap = {
  0: "Inga halter",
  1: "Låga",
  2: "Låga till måttliga",
  3: "Måttliga",
  4: "Måttliga till höga",
  5: "Höga",
  6: "Höga till mycket höga",
  7: "Mycket höga",
};
const pollenTypeMap = {
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323236": "al",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323533": "malörtsambrosia",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323530": "gråbo",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323332": "björk",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323233": "hassel",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323335": "bok",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323433": "gräs",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323337": "ek",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323330": "sälg och viden",
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323331": "alm",
};

const colorMap = {
  0: "32",
  1: "33",
  2: "33",
  3: "33",
  4: "33",
  5: "31",
  6: "31",
  7: "31",
};

const getPollen = async () => {
  const result = await fetch(
    `${BASE_URL}/forecasts?region_id=${REGION_ID}&pollen_id=${POLLEN_ID}&current=true`
  );
  const data = await result.json();
  const pollenLevel = data.items?.[0]?.levelSeries?.[0].level;

  console.log(
    `\x1b[${colorMap[pollenLevel]}m${pollenMap[pollenLevel]} ${
      pollenLevel != 0 ? "halter " : ""
    }av ${pollenTypeMap[POLLEN_ID]} idag.\x1b[0m`
  );
};

getPollen();
