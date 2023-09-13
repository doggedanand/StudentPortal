document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registerButton")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }
      const gender = document.getElementById("gender").value;

      const user = {
        id: 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        gender: gender,
      };

      const userDataJSON = JSON.stringify(user);

      // Save user data to local storage
      localStorage.setItem("userData", userDataJSON);

      alert("You have successfully registered.");
      // After register, will be redirect the user to the login page
      window.location.href = "login.html";
    });
});
