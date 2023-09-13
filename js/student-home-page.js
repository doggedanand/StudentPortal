// For Show the nav toogle on small screen
function showNavToogler() {
  const ulElement = document.querySelector(".navbar-collapse");
  ulElement.classList.toggle("show");
}

// For Active the li on page

// const liElements = document.querySelectorAll(".list-group-item");

// liElements.forEach((li) => {
//   li.addEventListener("click", () => {
//     liElements.forEach((el) => {
//       el.classList.remove("active");
//     });
//     li.classList.add("active");
//   });
// });

setTimeout(() => {
  const activePage = window.location.pathname;
  console.log("activePage :", activePage);
  const navLinks = document.querySelectorAll(".list-group-item");
  console.log("navlinks :", navLinks);
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
console.log('linkHref :',linkHref)
    if (linkHref && activePage.includes(linkHref)) {
      link.classList.add("fw-bold", "active");
    }
  });
}, 50);

// For Active Nav link
setTimeout(() => {
  const navLiElements = document.querySelectorAll(".nav-item");

  navLiElements.forEach((li) => {
    li.addEventListener("click", () => {
      navLiElements.forEach((el) => {
        el.classList.remove("active", "fw-bold");
      });

      li.classList.add("fw-bold", "active");
    });
  });
}, 50);
