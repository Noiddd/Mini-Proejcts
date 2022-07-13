const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgContainer = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let currentImg = 1;
let timeout;

const updateImg = function () {
  if (currentImg > imgsEl.length) {
    currentImg = 0;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }

  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
};

nextEl.addEventListener("click", function () {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", function () {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();
