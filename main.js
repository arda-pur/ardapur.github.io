/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

function validateForm() {
  const postalCodeInput = document.getElementById("postalCode");
  const postalCodePattern = new RegExp("[A-Za-z]\\d[A-Za-z] \\d[A-Za-z]\\d");
  const hiringRadio = document.getElementById("hiring");
  const hourlyRateInput = document.getElementById("rate");

  if (!postalCodePattern.test(postalCodeInput.value)) {
    alert("Please enter a valid Canadian Postal Code.");
    return false;
  }

  if (hiringRadio.checked && !hourlyRateInput.checkValidity()) {
    alert("Please enter a valid hourly rate for Hiring.");
    return false;
  }

  return true;
}
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
