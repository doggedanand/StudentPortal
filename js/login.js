// // TODO: later I have to check if email id is already exits then user unale to register
// // from that email

// const loginForm = document.querySelector("form");

// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Fetch all user data from local storage
//   const allUserDataJSON = localStorage.getItem("userData");

//   if (allUserDataJSON) {
//     const allUserData = JSON.parse(allUserDataJSON);

//     // Loop through all user data
//     for (const userData of allUserData) {
//       console.log("userData :", userData);
//       if (
//         (userData.email === username || userData.username === username) &&
//         userData.password === password
//       ) {
//         alert("Login successful!");

//         window.location.href = "/student-home-page.html";
//         return;
//       } else if (
//         userData.email === username ||
//         userData.password === password
//       ) {
//         alert("Invalid username/email or password. Please try again.");
//       } else {
//         alert("User not registered. Please register first.");
//       }
//     }
//   } else {
//     alert("User not registered. Please register first.");
//   }
// });

const loginForm = document.querySelector("form");
let isLogin = false; // Initialize isLogin as false

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Fetch all user data from local storage
  const allUserDataJSON = localStorage.getItem("userData");

  if (allUserDataJSON) {
    const allUserData = JSON.parse(allUserDataJSON);

    // Loop through all user data
    for (const userData of allUserData) {
      console.log("userData :", userData);
      if (
        (userData.email === username || userData.username === username) &&
        userData.password === password
      ) {
        alert("Login successful!");

        // Set isLogin to true upon successful login
        isLogin = true;

        window.location.href = "/student-home-page.html";
        return;
      } else if (
        userData.email === username ||
        userData.password === password
      ) {
        alert("Invalid username/email or password. Please try again.");
      } else {
        alert("User not registered. Please register first.");
      }
    }
  } else {
    alert("User not registered. Please register first.");
  }
});

// Check isLogin before accessing the registration page
const registrationLink = document.getElementById("registration-link");
registrationLink.addEventListener("click", function (event) {
  if (isLogin) {
    // If user is logged in, redirect them to the home page
    event.preventDefault();
    window.location.href = "/student-home-page.html";
  }
});
