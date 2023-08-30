const footer = document.querySelector(".footer");
 
fetch("/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.outerHTML = data;
  })
  .catch((error) => console.error("Error loading footer file:", error));
 
 