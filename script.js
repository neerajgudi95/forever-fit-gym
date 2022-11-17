const menuBtn = document.getElementById("menuBtn");
const navUl = document.getElementById("nav-ul");

menuBtn.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

const trainers = document.querySelectorAll(".trainer");

trainers.forEach((trainer, id) => {
  let currentDelay = 300;
  trainer.style.animationDelay = `${currentDelay + id * 50}ms`;
});

window.onload = function () {
  trainers.forEach((trainer) => {
    if (trainer.offsetTop < window.innerHeight) {
      trainer.style.animationPlayState = "running";
    }
  });
};

window.addEventListener("scroll", function () {
  trainers.forEach((trainer) => {
    if (trainer.offsetTop - trainer.offsetTop / 2 < window.scrollY) {
      trainer.style.animationPlayState = "running";
    }
  });
});
