import "../styles/style.css";
import "./seals";
import "./dom";
import { DOMselectors } from "./dom";
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

document.querySelector(".age").addEventListener("click", function () {
  seals
    .filter((seal) => seal.age >= 10)
    .forEach((seal) => console.log(seal.names));
});

document.querySelector(".weight").addEventListener("click", function () {
  seals
    .filter((seal) => seal.weight >= 300)
    .forEach((seal) => console.log(seal.names));
});

document.querySelector(".angry").addEventListener("click", function () {
  seals
    .filter((seal) => seal.hostile === "yes")
    .forEach((seal) => console.log(seal.names));
});

seals.forEach((seal) => {
  DOMselectors.card.insertAdjacentHTML(
    "afterbegin",
    `<div class="sealcard"> 
    <h2 class="sealcardname"> ${seal.names} </h2>
    <img
     src="${seal.img}">
     <p> Age: ${seal.age} </p>
     <p> Weight: ${seal.weight}lbs </p>
     <p> Gender: ${seal.gender} </p>
     <p> Angry? ${seal.hostile} </p>
     <p> Stock: ${seal.stock} </p>
     <h3 class="sealcardprice"> $${seal.value}</h3>
    </div>`
  );
});

/// // placeholder console loggings// ///

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
/// // the great divider // ///

const hamburger = seals.weight.map((yumme) => yumme * 1.5);
console.log(hamburger);

setupCounter(document.querySelector("#counter"));
