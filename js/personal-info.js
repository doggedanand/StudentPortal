// document.addEventListener("DOMContentLoaded", function () {

// });

setTimeout(() => {
  function displayUserData() {
    // Get the data from local storage
    let userData = localStorage.getItem("userData");
    const allUserData = JSON.parse(userData);

    const id = document.getElementById("userID");

    if (id !== null) {
      for (const data of allUserData) {
        var tempData = `
            <p class="card-text fw-bold">User ID: ${data.id}</p>
                <p class="card-text">Name: ${data.firstName} ${data.lastName}</p>
                <p class="card-text">Email: ${data.email}</p>
                <p class="card-text">Gender: ${data.gender}</p>
            `;
        id.innerHTML = tempData;
      }
      console.log("id :", id);
    } else {
      console.log("something went wrong");
    }
  }
}, 50);

displayUserData();
