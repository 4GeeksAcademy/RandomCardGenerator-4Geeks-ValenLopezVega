import "bootstrap";
import "./style.css";

function generarCarta() {
  const topIcon = document.getElementById("top-icon");
  const number = document.getElementById("number");
  const bottomIcon = document.getElementById("bottom-icon");

  const symbols = ["♦", "♥", "♠", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Elegir uno al azar de cada array
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Asignar los valores a la carta
  topIcon.innerText = randomSymbol;
  number.innerText = randomValue;
  bottomIcon.innerText = randomSymbol;

  // Cambiar el color si es corazón o diamante (son rojos)
  const isRed = randomSymbol === "♦" || randomSymbol === "♥";
  const color = isRed ? "red" : "black";

  topIcon.style.color = color;
  bottomIcon.style.color = color;
}

window.onload = generarCarta;
