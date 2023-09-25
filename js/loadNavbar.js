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

// For Active Nav link

const loadnavLinks = setInterval(() => {
  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks) {
    activeNavLinks();
  }
}, 50);
function activeNavLinks() {
  clearInterval(loadnavLinks);

  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    if (linkHref && activePage.includes(linkHref)) {
      link.classList.add("fw-bold", "active");
    }
  });
}
