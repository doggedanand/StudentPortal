const checkHome = setInterval(() => {
  if (document.querySelector(".home")) {
    loadHome();
  }
}, 1000);

function loadHome() {
  clearInterval(checkHome);
  const home = document.querySelector(".home");

  fetch("/home-page.html")
    .then((res) => res.text())
    .then((data) => {
      home.innerHTML = data;
    });

  //Check if user not logout redirect on user student home page

  window.addEventListener("load", function () {
    const allUserDataJSON = localStorage.getItem("userData");

    if (allUserDataJSON) {
      const allUserData = JSON.parse(allUserDataJSON);

      const loggedInUser = allUserData.find(
        (userData) => userData.isLogin === true
      );

      if (loggedInUser) {
        alert("You are already logged in!");
        window.location.href = "/student-home-page.html";
      }
    }
  });
}
