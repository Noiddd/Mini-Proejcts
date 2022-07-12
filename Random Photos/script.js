const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

const addNewImages = function () {
  const newImgEl = document.createElement("img");
  newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
    Math.random() * 2000
  )}`;
  imageContainerEl.appendChild(newImgEl);
};

btnEl.addEventListener("click", () => {
  addNewImages();
});
