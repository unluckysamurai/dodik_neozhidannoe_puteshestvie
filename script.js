const slides = document.querySelectorAll(".slide");
//const buttons = document.querySelectorAll('.butoons')
//const button = document.querySelectorAll('.button')
let i = 0;
const chapters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const game = function (i) {
  if (chapters.includes(i)) {
    if (slides[i].classList.contains(`${i}`)) {
      slides[i - 1].style.zIndex = 0;
      slides[i].style.zIndex = 1;
      i++;
    }
  }
};

const endGame = function () {
  for (val of slides) {
    val.style.zIndex = 0;
  }
  slides[0].style.zIndex = 1; 
  i = 0
};


