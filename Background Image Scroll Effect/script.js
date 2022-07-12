const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", function () {
  updateImage();
});

const updateImage = function () {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
};
