const menuBtn = document.getElementById("menuBtn");
const navUl = document.getElementById("nav-ul");

menuBtn.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
