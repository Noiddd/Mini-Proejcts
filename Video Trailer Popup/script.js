const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", function () {
  trailerContainerEl.classList.toggle("active");
});

closeIconEl.addEventListener("click", function () {
  trailerContainerEl.classList.toggle("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
