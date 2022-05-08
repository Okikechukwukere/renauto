const openedMenu = document.querySelector("#opened");
const closedMenu = document.querySelector("#closed");
const openedNav = document.querySelector("#nav");
const burger = document.querySelector("#burger");

burger.addEventListener("click", menuOpen);

function menuOpen() {
  openedMenu.classList.toggle("hidden");
  openedNav.classList.toggle("hidden");
  closedMenu.classList.toggle("hidden");
}
