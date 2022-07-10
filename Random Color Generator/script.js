const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}
const colorContainerEls = document.querySelectorAll(".color-container");

const randomColorCode = function () {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);

    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
};

const generateColors = function () {
  colorContainerEls.forEach((el) => {
    const newColorCode = randomColorCode();
    el.style.backgroundColor = "#" + newColorCode;
    el.innerText = "#" + newColorCode;
  });
};

generateColors();
