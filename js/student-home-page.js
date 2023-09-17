// For Show the nav toogle on small screen
function showNavToogler() {
  const ulElement = document.querySelector(".navbar-collapse");
  ulElement.classList.toggle("show");
}

// For active student side bar menu

/*
  const activePage = window.location.pathname;
console.log('activePage :',activePage)
  const menuLinks = document.querySelectorAll(".list-group-item");
  // console.log('menuLinks is :',menuLinks)
  menuLinks.forEach((link) => {
    // link.classList.remove("active", "fw-bold");
    const anchorTag = link.querySelector("a");
    console.log('link :',anchorTag);
    
    const linkHref = anchorTag.getAttribute("href");
    
    console.log('link data is :',linkHref);
    if (linkHref && activePage.includes(linkHref)) {
      link.classList.add("fw-bold", "active");
    }
  });

*/setTimeout(() => {
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Dom content loaded");
    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    const item4 = document.getElementById("item4");
  
    console.log("items :", item1, item2, item3);
  
    function removeActiveClass() {
      item1.classList.remove("active", "fw-bold");
      item2.classList.remove("active", "fw-bold");
      item3.classList.remove("active", "fw-bold");
      item4.classList.remove("active", "fw-bold");
    }
  
    item1.addEventListener("click", function () {
      removeActiveClass();
  
      item1.classList.add("active", "fw-bold");
    });
  
    item2.addEventListener("click", function () {
      removeActiveClass();
  
      item2.classList.add("active", "fw-bold");
    });
  
    item3.addEventListener("click", function () {
      removeActiveClass();
  
      item3.classList.add("active", "fw-bold");
    });
    item4.addEventListener("click", function () {
      removeActiveClass();
  
      item4.classList.add("active", "fw-bold");
    });
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
