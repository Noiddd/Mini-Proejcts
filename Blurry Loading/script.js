const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const int = setInterval(blurring, 30); // calls the function at specified miliseconds

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int); // this stop the interval
  }

  loadText.textContent = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // scales opacity with load
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // scales background blur with load
}

// This function scales a number based on another scale
// As load increasing, opacity will decrease
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
