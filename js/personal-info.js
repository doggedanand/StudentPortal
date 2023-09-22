var checkElement;
test();

function test() {
  var allUserDataJSON = localStorage.getItem("userData");
  var allUserData = JSON.parse(allUserDataJSON);

  checkElement = setInterval(() => {
    if (document.getElementById("userID") !== null) {
      addPersonSection(allUserData);
    }
  }, 50);
}

function addPersonSection(allUserData) {
  clearInterval(checkElement);

  const id = document.getElementById("userID");

  if (id !== null) {
    const loggedInUsers = allUserData.filter((user) => user.isLogin === true);

    if (loggedInUsers) {
      loggedInUsers.forEach((user) => {
        var tempData = `
          <p class="card-text fw-bold">User ID: ${user.id}</p>
          <p class="card-text">Name: ${user.firstName} ${user.lastName}</p>
          <p class="card-text">Email: ${user.email}</p>
          <p class="card-text">Gender: ${user.gender}</p>
          `;
        id.innerHTML = tempData;
      });
    }
  }
}
