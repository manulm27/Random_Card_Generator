import "bootstrap";
import "./style.css";

let arrPinta = ["fa-heart", "fa-dice-four", "fa-chess-queen", "fa-diamond"];
let button1 = document.querySelector("#changeCard");
let icon = document.querySelectorAll("i");
let texto = document.querySelector("p");
let button2 = document.querySelector("#changeSize");
texto.innerHTML = Math.floor(Math.random() * 12);

let newCard = () => {
  let number = Math.floor(Math.random() * 12);
  if (number === 0) {
    while (number > 0) {
      texto.innerHTML = Math.floor(Math.random() * 12);
    }
  } else {
    texto.innerHTML = number;
  }

  let randomPinta = Math.floor(Math.random() * 4);
  let item;
  for (item of icon) {
    if (item.classList.length > 1) {
      item.classList.remove(item.classList[1]);
      console.log(item.classList);
    }
    console.log(randomPinta);
    //Cuando se agrgan clases con mas de una palabra, en el classList.add hay que agregar una coma por palabra.
    item.classList.add("fa-solid", arrPinta[randomPinta], "m-4");
  }
};

let newSize = () => {
  let ejeX = document.querySelector("#widt").value;
  let ejeY = document.querySelector("#heigh").value;

  if (isNaN(ejeX) == true || isNaN(ejeY) == true) {
    alert("Error :( !! Por favor introduce un numero.");
  } else {
    let numX = parseInt(ejeX);
    let numY = parseInt(ejeY);
    let card = document.querySelector(".bg-success");

    if (numX < 250 || numY < 250) {
      alert("La dimension es muy pequeña!! Intentalo de nuevo :)");
    } else {
      card.style.width = numX + "px";
      card.style.height = numY + "px";
      document.querySelector("#widt").value = "";
      document.querySelector("#heigh").value = "";
    }
  }
};

button1.changeCard = newCard;
button2.changeSize = newSize;

setInterval(newCard, 4000);
