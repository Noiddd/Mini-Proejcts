const container = document.querySelector(".container");
const popUp = document.querySelector(".popup-container");

const btnJoin = document.querySelector(".btn");
const btnClosePopup = document.querySelector(".close-icon");

btnJoin.addEventListener("click", function () {
  container.classList.toggle("active");
  popUp.classList.toggle("active");
});

btnClosePopup.addEventListener("click", function () {
  container.classList.toggle("active");
  popUp.classList.toggle("active");
});
