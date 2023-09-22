// // TODO: later I have to check if email id is already exits then user unable to register
// // from that email

const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Fetch all user data from local storage
  const allUserDataJSON = localStorage.getItem("userData");

  if (allUserDataJSON) {
    const allUserData = JSON.parse(allUserDataJSON);

    // Find the user with matching credentials
    const userIndex = allUserData.findIndex(
      (userData) =>
        (userData.email === username || userData.username === username) &&
        userData.password === password
    );

    if (userIndex !== -1) {
      // Set isLogin to true upon successful login
      allUserData[userIndex].isLogin = true;
      localStorage.setItem("userData", JSON.stringify(allUserData));

      alert("Login successful!");
      window.location.href = "/student-home-page.html";
    } else {
      alert("Invalid username/email or password. Please try again.");
    }
  } else {
    alert("User not registered. Please register first.");
  }
});
