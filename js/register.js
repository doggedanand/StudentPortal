/*

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registerButton")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const gender = document.getElementById("gender").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      // Check if userData already exists in local storage
      let userDataJSON = localStorage.getItem("userData");
      let userData = [];

      if (userDataJSON) {
        userData.push(JSON.parse(userDataJSON));
      }

      // Generate a unique ID for the new user
      const userId = generateUniqueId();

      // Create a new user object
      const user = {
        id: userId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        gender: gender,
        isLogin: false,
      };
      console.log("user :", user);
      // Push the new user object into the userData array
      userData.push(user);

      // Update the local storage with the modified userData array
      localStorage.setItem("userData", JSON.stringify(userData));

      alert("You have successfully registered.");
      // After registration, redirect the user to the login page
      window.location.href = "login.html";
    });
});

// Function to generate a unique ID (you can use any unique ID generation method you prefer)
function generateUniqueId() {
  return Math.floor(Math.random() * 90000) + 10000;
}

*/

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registerButton")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const gender = document.getElementById("gender").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      // Get existing userData from local storage
      let userDataJSON = localStorage.getItem("userData");
      let userData = [];

      if (userDataJSON) {
        userData = JSON.parse(userDataJSON);
      }

      // Check if the user with the same username already exists
      const existingUser = userData.find(user => user.username === username);

      if (existingUser) {
        alert("User with this username already exists. Please choose a different username.");
        return;
      }

      // Generate a unique ID for the new user
      const userId = generateUniqueId();

      // Create a new user object
      const user = {
        id: userId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        gender: gender,
        isLogin: false,
      };

      // Push the new user object into the userData array
      userData.push(user);

      // Update the local storage with the modified userData array
      localStorage.setItem("userData", JSON.stringify(userData));

      alert("You have successfully registered.");
      // After registration, redirect the user to the login page
      window.location.href = "login.html";
    });
});

// Function to generate a unique ID  
function generateUniqueId() {
  return Math.floor(Math.random() * 90000) + 10000;
}

