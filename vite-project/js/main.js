import "./style";
import "./seals";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import { seals } from "./seals";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

function sealprice1 {
  seals
    .filter((seal) => seal.price >= 2500)
    .forEach((seal) => console.log(seal.value));
}

insertfunctionname {
  seals
    .filter((seal) => seal.price < 2500)
    .forEach((seal) => console.log(seal.value));
}

insertfunctionname {
  seals
    .filter((seal) => seal.age >= 13)
    .forEach((seal) => console.log(seal.age));
}

insertfunctionname {
  seals
    .filter((seal) => seal.age < 13)
    .forEach((seal) => console.log(seal.age));
}

insertfunctionname {
  seals
    .filter((seal) => seal.age < 13)
    .forEach((seal) => console.log(seal.age));
}

insertfunctionname {
  seals
    .filter((seal) => seal.weight < 300)
    .forEach((seal) => console.log(seal.weight));
}

insertfunctionname {
  seals
    .filter((seal) => seal.weight >= 300)
    .forEach((seal) => console.log(seal.weight));
}

insertfunctionname {
  seals
    .filter((seal) => seal.hostile === "yes")
    .forEach((seal) => console.log(seal.hostile));
}

insertfunctionname {
  seals
    .filter((seal) => seal.hostile === "no")
    .forEach((seal) => console.log(seal.hostile));
}

setupCounter(document.querySelector("#counter"));
