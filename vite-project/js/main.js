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

document.querySelector(".default").addEventListener("click", function () {
  DOMselectors.card.innerHTML = ``;
  makecard();
});

document.querySelector(".price").addEventListener("click", function () {
  DOMselectors.card.innerHTML = ``;
  DOMselectors.price.innerHTML = `CURRENT`;
  makecardbyprice();
});

document.querySelector(".age").addEventListener("click", function () {
  DOMselectors.card.innerHTML = ``;
  makecardbyage();
});

document.querySelector(".weight").addEventListener("click", function () {
  DOMselectors.card.innerHTML = ``;
  makecardbyweight();
});

document.querySelector(".angry").addEventListener("click", function () {
  DOMselectors.card.innerHTML = ``;
  makecardbyangry();
});

function resetbuttonname() {
  DOMselectors.price.innerHTML = `Sort by $$$`;
  DOMselectors.age.innerHTML = `Sort by Age`;
  DOMselectors.weight.innerHTML = `Sort by Weight`;
  DOMselectors.angry.innerHTML = `Sort by Angery`;
}

function makecard() {
  seals.forEach((seal) => {
    DOMselectors.card.insertAdjacentHTML(
      "afterbegin",
      `<div class="sealcard"> 
    <h2 class="sealcardname"> ${seal.names} </h2>
    <img class="sealcardimg" src="${seal.img}">
     <p class ="sealcardtext"> Species: ${seal.species}</p>
     <p class ="sealcardtext"> Age: ${seal.age} </p>
     <p class ="sealcardtext"> Weight: ${seal.weight}lbs </p>
     <p class ="sealcardtext"> Gender: ${seal.gender} </p>
     <p class ="sealcardtext"> Angry? ${seal.hostile} </p>
     <p class ="sealcardtext"> Stock: ${seal.stock} </p>
     <h3 class ="sealcardtext"> $${seal.value}</h3>
    </div>`
    );
  });
}

function makecardbyage() {
  seals
    .filter((seal) => seal.age >= 10)
    .forEach((seal) => {
      DOMselectors.card.insertAdjacentHTML(
        "afterbegin",
        `<div class="sealcard"> 
    <h2 class="sealcardname"> ${seal.names} </h2>
    <img class="sealcardimg" src="${seal.img}">
     <p class ="sealcardtext"> Species: ${seal.species}</p>
     <p class ="sealcardtext"> Age: ${seal.age} </p>
     <p class ="sealcardtext"> Weight: ${seal.weight}lbs </p>
     <p class ="sealcardtext"> Gender: ${seal.gender} </p>
     <p class ="sealcardtext"> Angry? ${seal.hostile} </p>
     <p class ="sealcardtext"> Stock: ${seal.stock} </p>
     <h3 class ="sealcardtext"> $${seal.value}</h3>
    </div>`
      );
    });
}

function makecardbyprice() {
  seals
    .filter((seal) => seal.value >= 2500)
    .forEach((seal) => {
      DOMselectors.card.insertAdjacentHTML(
        "afterbegin",
        `<div class="sealcard"> 
    <h2 class="sealcardname"> ${seal.names} </h2>
    <img class="sealcardimg" src="${seal.img}">
     <p class ="sealcardtext"> Species: ${seal.species}</p>
     <p class ="sealcardtext"> Age: ${seal.age} </p>
     <p class ="sealcardtext"> Weight: ${seal.weight}lbs </p>
     <p class ="sealcardtext"> Gender: ${seal.gender} </p>
     <p class ="sealcardtext"> Angry? ${seal.hostile} </p>
     <p class ="sealcardtext"> Stock: ${seal.stock} </p>
     <h3 class ="sealcardtext"> $${seal.value}</h3>
    </div>`
      );
    });
}

function makecardbyweight() {
  seals
    .filter((seal) => seal.weight >= 300)
    .forEach((seal) => {
      DOMselectors.card.insertAdjacentHTML(
        "afterbegin",
        `<div class="sealcard"> 
    <h2 class="sealcardname"> ${seal.names} </h2>
    <img class="sealcardimg" src="${seal.img}">
     <p class ="sealcardtext"> Species: ${seal.species}</p>
     <p class ="sealcardtext"> Age: ${seal.age} </p>
     <p class ="sealcardtext"> Weight: ${seal.weight}lbs </p>
     <p class ="sealcardtext"> Gender: ${seal.gender} </p>
     <p class ="sealcardtext"> Angry? ${seal.hostile} </p>
     <p class ="sealcardtext"> Stock: ${seal.stock} </p>
     <h3 class ="sealcardtext"> $${seal.value}</h3>
    </div>`
      );
    });
}

function makecardbyangry() {
  seals
    .filter((seal) => seal.hostile === "yes")
    .forEach((seal) => {
      DOMselectors.card.insertAdjacentHTML(
        "afterbegin",
        `<div class="sealcard"> 
    <h2 class="sealcardname"> ${seal.names} </h2>
    <img class="sealcardimg" src="${seal.img}">
     <p class ="sealcardtext"> Species: ${seal.species}</p>
     <p class ="sealcardtext"> Age: ${seal.age} </p>
     <p class ="sealcardtext"> Weight: ${seal.weight}lbs </p>
     <p class ="sealcardtext"> Gender: ${seal.gender} </p>
     <p class ="sealcardtext"> Angry? ${seal.hostile} </p>
     <p class ="sealcardtext"> Stock: ${seal.stock} </p>
     <h3 class ="sealcardtext"> $${seal.value}</h3>
    </div>`
      );
    });
}

makecard();

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

setupCounter(document.querySelector("#counter"));
