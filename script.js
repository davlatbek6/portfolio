// //////////////////////////////////////////////////////////
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigition");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  nav.classList.toggle("active");
});
document.querySelector(".abcd").addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
});
document.querySelector(".abcde").addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
});
document.querySelector(".abcdef").addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
});
document.querySelector(".abcdefg").addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
});
document.querySelector(".abcdefgh").addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
});
