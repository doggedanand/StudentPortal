const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const userDataJSON = localStorage.getItem("userData");

  if (userDataJSON) {
    const userData = JSON.parse(userDataJSON);

    if (
      (userData.email === username || userData.username === username) &&
      userData.password === password
    ) {
      window.location.href = "/student-home-page.html";
    } else {
      alert("Invalid username/email or password. Please try again.");
    }
  } else {
    alert("No user registered. Please register first.");
  }
});
