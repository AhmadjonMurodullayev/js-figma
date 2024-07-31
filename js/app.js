let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

let toggleBtn = document.querySelector(".header__btn-hamburger");
let headerList = document.querySelector(".header-list");
let toggleBtnc = document.querySelector(".header__search-hamburger");
let header__search__btn2 = document.querySelector(".header__search__btn2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",() => {
  headerList.classList.toggle("header__list-show");
});
toggleBtnc.addEventListener("click",() => {
  header__search__btn2.classList.toggle("aktiv");
});