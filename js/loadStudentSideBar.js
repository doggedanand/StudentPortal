const sideBar = document.getElementById("side-bar");

fetch("/student-side-bar.html")
  .then((res) => res.text())
  .then((data) => {
    sideBar.outerHTML = data;
  });
