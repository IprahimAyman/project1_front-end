var openNav = document.querySelector("#aq");
var closeNav = document.querySelector("#as");
var nav = document.querySelector(".navbar");

openNav.addEventListener("click", () => {
  openNav.style.display = "none";
  closeNav.style.display = "block";
  nav.classList.add('active')
});

closeNav.addEventListener("click", () => {
  closeNav.style.display = "none";
  openNav.style.display = "block";
  nav.classList.remove('active')
});
