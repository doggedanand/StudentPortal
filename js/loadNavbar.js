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

function onclickNavigation() {
  const ul = document.querySelector(".navbar-collapse");
  ul.classList.toggle("show");
}

// setTimeout(() => {
//   const activePage = window.location.pathname;
//   // console.log(activePage, "active page");
//   const navLinks = document.querySelectorAll(".nav-link");
//   // console.log(navLinks);
//   navLinks.forEach((link) => {
//     var x = link.href.includes(`${activePage}`);
//     console.log("x value is :", typeof x);
//     if (link.href.includes(`${activePage}`) === true) {
//       console.log("/ get");
//     }
//     if (link.href.includes(`${activePage}`))
//       // link.classList.add("active");
//       link.classList.add("fw-bold", "active");
//   });
// }, 50);

// setTimeout(() => {
//   const registrationLink = document.getElementById("registrationLink");
//   const loginLink = document.getElementById("loginLink");
//   const contactUsLink = document.getElementById("contactUsLink");

//   const links = [registrationLink, loginLink, contactUsLink];
// console.log('links are :',links)
//   links.forEach((link) => {
//     link.addEventListener("click", function () {
//       links.forEach((data) => {
//         data.classList.remove("active", "fw-bold");
//         // l.classList.remove("fw-bold");
//       });

//       data.classList.add("active", "fw-bold");
//       // this.classList.add("fw-bold");
//     });
//   });
// }, 50);

// For Active Nav link

setTimeout(() => {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
   
    if (linkHref && activePage.includes(linkHref)) {
      link.classList.add("fw-bold", "active");
    }
  });
}, 50);
