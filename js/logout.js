const logout = setInterval(() => {
  var logoutButton = document.getElementById("logout");
  if (logoutButton) {
    userLogout();
  }
}, 50);

function userLogout() {
  clearInterval(logout);

  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", () => {
    let logoutCheck = confirm("Are you sure want to logout!");
    if (logoutCheck === true) {
      // logoutButton.addEventListener("click", function (event) {
      //   event.preventDefault();

        const allUserDataJSON = localStorage.getItem("userData");

        if (allUserDataJSON) {
          const allUserData = JSON.parse(allUserDataJSON);

          const loggedInUser = allUserData.find(
            (userData) => userData.isLogin === true
          );

          if (loggedInUser) {
            loggedInUser.isLogin = false;

            localStorage.setItem("userData", JSON.stringify(allUserData));
          
            window.location.href = "/login.html";
          } else {
            alert("You are already logout!");
            window.location.href = "/login.html";
          }
        }
      // });
    }
  });
}
