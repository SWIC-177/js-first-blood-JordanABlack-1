import { CHAMPIONS } from "./src/data";

const championsWithVacantTitle = CHAMPIONS.filter(
  (champions) => champions !== "Vacant Title",
);

console.log(championsWithVacantTitle);
