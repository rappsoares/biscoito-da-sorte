// Variables
const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "Se a vida te der limões, faça uma limonada.",
  "A persistência é o caminho do êxito.",
  "Conquiste seus medos ou seus medos o conquistarão.",
  "Acredite em milagres, mas não dependa deles.",
  "Grandes ideias alteram o curso da história.",
  "Boas coisas estão por vir para quem sabe esperar.",
  "A sorte favorece a mente bem preparada.",
  "O segredo para começar algo é parar de falar e começar a fazer.",
];
const btnLuck = document.querySelector(".btnLuck");
const btnAgain = document.querySelector(".btnAgain");

const luckText = document.querySelector(".luckText");
let randomNumber = Math.round(Math.random() * 9);

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

// Events
btnLuck.addEventListener("click", handleLuckClick);
btnAgain.addEventListener("click", handleAgainClick);

// Callback Functions
function handleLuckClick() {
  screenToggle();
  luckText.innerText = phrases[randomNumber];
}

function handleAgainClick() {
  screenToggle();
  randomNumber = Math.round(Math.random() * 9);
}

// Functions
function screenToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
