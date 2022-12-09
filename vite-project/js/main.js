import "../styles/style.css";
import "./seals";
import { setupCounter } from "./counter.js";
import { seals } from "./seals";

console.log("======================Expensive Seals======================");
seals
  .filter((seal) => seal.value >= 2500)
  .forEach((seal) => console.log(seal.names));

console.log("======================Cheap Seals======================");

seals
  .filter((seal) => seal.value < 2500)
  .forEach((seal) => console.log(seal.names));

console.log("=======================Older Seals=====================");
seals
  .filter((seal) => seal.age >= 13)
  .forEach((seal) => console.log(seal.names));

console.log("=======================Young Seals=====================");
seals
  .filter((seal) => seal.age < 13)
  .forEach((seal) => console.log(seal.names));

console.log("=======================Skinny Seals=====================");
seals
  .filter((seal) => seal.weight < 300)
  .forEach((seal) => console.log(seal.names));

console.log("=======================Fat Seals=====================");
seals
  .filter((seal) => seal.weight >= 300)
  .forEach((seal) => console.log(seal.names));

console.log("=======================Angry Seals=====================");
seals
  .filter((seal) => seal.hostile === "yes")
  .forEach((seal) => console.log(seal.names));

console.log("=======================Friendly Seals=====================");
seals
  .filter((seal) => seal.hostile === "no")
  .forEach((seal) => console.log(seal.names));
console.log("=======================After Burger Seals=====================");
const hamburger = seals.weight.map((yumme) => yumme * 1.5);
console.log(hamburger);

setupCounter(document.querySelector("#counter"));
