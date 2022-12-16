import "../styles/style.css";
import "./seals";
import "./dom";
import { setupCounter } from "./counter.js";
import { seals } from "./seals";

document.querySelector(".button1").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.remove("warm");
    document.body.classList.add("cool");
  }
});

document.querySelector(".price").addEventListener("click", function () {
  seals
    .filter((seal) => seal.value >= 2500)
    .forEach((seal) => console.log(seal.names));
});

function profile() {
  DOMselectors.profile.insertAdjacentHTML(
    "beforeend",
    `<div class = "profile"> <p>${input1}</p> <p><img src= ${img} class="imgView"></p> <p>${input2}</p>  <button class="tempBtn">Delete</button></div>`
  );
}

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
