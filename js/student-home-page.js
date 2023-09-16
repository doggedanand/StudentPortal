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

// For active student side bar menu


  const activePage = window.location.pathname;

  const menuLinks = document.querySelectorAll(".list-group-item");
  console.log('menuLinks is :',menuLinks)
  menuLinks.forEach((link) => {
    link.classList.remove("active", "fw-bold");
    const anchorTag = link.querySelector("a");
    console.log('link :',anchorTag);
    
    const linkHref = anchorTag.getAttribute("href");
    
    console.log('link data is :',linkHref);
    if (linkHref && activePage.includes(linkHref)) {
      link.classList.add("fw-bold", "active");
    }
  });


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

