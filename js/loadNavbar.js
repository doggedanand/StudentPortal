// It will apply on every page, means navbar will show in every page
const nav = document.querySelector(".navbar");
fetch("/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    nav.outerHTML = data;
  });
// ----------------*******************************------------------------//
//  For showing nav link on small screen
//------------------******************************-------------------------//
/*


const navbarToggler = document.querySelector(".navbar-toggler");
const ul = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function () {
  ul.classList.toggle("show");
});
*/




// For Active Nav link

