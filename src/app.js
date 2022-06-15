import "bootstrap";
import "./style.css";

window.onload = function() {
  let arrPinta = ["fa-heart", "fa-dice-four", "fa-chess-queen", "fa-diamond"];
  let boton = document.querySelector("button");
  let icon = document.querySelectorAll("i");
  let texto = document.querySelector("p");
  texto.innerHTML = Math.floor(Math.random() * 12);

  boton.addEventListener("click", () => {
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
      //Cuando se agregan clases con mas de una palabra separadas por un espacio, en el classList.add hay que agregar una coma por palabra.
      item.classList.add("fa-solid", arrPinta[randomPinta]);
    }
  });
};
