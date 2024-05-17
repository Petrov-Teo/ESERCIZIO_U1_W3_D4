// 1.NELLA SECTION TABELLONE DEVO CREARE 76 DIV
// - CREAZIONE
// - APPENDERE
// 3.DIV CON UN ESTRAZIONE RANDOM,

// const tabellone = (estraione) => {
//     const tabelloneSection = document.getElementById(
//         "tabelloneSection"
//       );
//     const numeriPosizioni = [];
// for (let index = 1; index < 76; index++) {
//   numeriPosizioni = index;
//   console.log(numeriPosizioni);
// }
//     const numCell = document.createElement("div");
//     numCell.classList.add("celleDiv");
//     numCellConten = document.createElement("h3");
//     numCellConten.innerText = index;
//     tabelloneSection.appendChild(numCell);
//   }

const tabellone = () => {
  const tabelloneSection = document.getElementById(
    "tabelloneSection"
  );
  const numeriPosizioni = [];

  for (let index = 1; index <= 76; index++) {
    numeriPosizioni.push(index);
    const numCell = document.createElement("div");
    numCell.classList.add("celleDiv");
    if (numCell.index === celle.index + 1) {
      classList.add("celleEstratte");
    }

    const numCellConten = document.createElement("h3");
    numCellConten.innerText = index;

    numCell.appendChild(numCellConten);
    tabelloneSection.appendChild(numCell);
  }
};

const numeriEstratti = [];

const startNumeri = document.getElementById("pulsantStart");
const celle = document.querySelectorAll(".celleEstratte");

startNumeri.addEventListener("click", (event) => {
  const numeriRandom = Math.floor(Math.random() * 76) + 1;
  numeriEstratti.push(numeriRandom);
  console.log(numeriEstratti);

  celle[numeriRandom - 1];
});

window.addEventListener("DOMContentLoaded", (event) => {
  tabellone();
});
