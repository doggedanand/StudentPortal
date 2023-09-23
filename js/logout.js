const logout = setInterval(() => {
  var logoutButton = document.getElementById("logout");
  if (logoutButton) {
    userLogout();
  }
}, 1000);

function userLogout() {
  clearInterval(logout);

  const logoutButton = document.getElementById("logout");

  logoutButton.addEventListener("click", function (event) {
    event.preventDefault();

    const allUserDataJSON = localStorage.getItem("userData");

    if (allUserDataJSON) {
      const allUserData = JSON.parse(allUserDataJSON);

      const loggedInUser = allUserData.find(
        (userData) => userData.isLogin === true
      );

      if (loggedInUser) {
        loggedInUser.isLogin = false;

        localStorage.setItem("userData", JSON.stringify(allUserData));
        alert("Are you sure want to logout!");
        window.location.href = "/login.html";
      } else {
        alert("You are already logout!");
        window.location.href = "/login.html";
      }
    }
  });
}
