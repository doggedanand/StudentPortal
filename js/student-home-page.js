//=============For Show the nav toogle on small screen====================//
function showNavToogler() {
  const ulElement = document.querySelector(".navbar-collapse");
  ulElement.classList.toggle("show");
}

//====For active student side bar menu====//

function work() {
  // console.log("under work");
  var d = document.getElementsByClassName("student-navbar");
}
if (document.readyState == "loading") {
  // Still loading
  document.addEventListener("DOMContentLoaded", work);
  // console.log(window.loadSudentSideBar);
} else {
  //Dom ready
  // console.log("Dom is ready");
}
// console.log("loadStudentSideBar :", window.loadSudentSideBar);

setTimeout(() => {
  // console.log("loadStudentSideBar :", window.loadSudentSideBar);
  // console.log("Dom content loaded");
  if (window.loadSudentSideBar == true) {
    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    const item4 = document.getElementById("item4");

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
  }
}, 500);

//================ For Active Nav link===================//
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
const userLoggedIn = true;
function loadContent(page) {
  fetch(page)
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("content").innerHTML = content;
      isLoggedIn = true;
    })
    .catch((error) => {
      console.error("Error fetching content: " + error);
    });
}

// =======Function to load the Personal Info page as the default home page======//
function loadDefaultHomePage() {
  loadContent("personal-info.html");
}

//=====Load the Personal Info page as the default home page====//
if (userLoggedIn) {
  loadDefaultHomePage();
}
