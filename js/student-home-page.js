// For Show the nav toogle on small screen
function showNavToogler() {
  const ul = document.querySelector(".navbar-collapse");
  ul.classList.toggle("show");
}

// For Active the li on page

const liElements = document.querySelectorAll(".list-group-item");

liElements.forEach((li) => {
  li.addEventListener("click", () => {
    liElements.forEach((el) => {
      el.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// For Active Nav link
const navLiElements = document.querySelectorAll(".nav-item");

navLiElements.forEach((li) => {
  li.addEventListener("click", () => {
    navLiElements.forEach((el) => {
      el.classList.remove("active", "fw-bold");
    });

    li.classList.add("fw-bold", "active");
  });
});
