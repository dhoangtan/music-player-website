'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {

  let scrollPosition = window.pageYOffset;

  if (scrollPosition > lastScrollPosition) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }

  lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});