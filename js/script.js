const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = this.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});
