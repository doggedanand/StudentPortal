
var checkElement;
test()
function test() {
  var allUserDataJSON = localStorage.getItem('userData')
  var allUserData=JSON.parse(allUserDataJSON)
  // console.log('allUserData.isLogin',allUserData.isLogin) 

  checkElement = setInterval(() => {
    if (document.getElementById("userID") !== null) {
      addPersonSection();
    }
  }, 50);
}

function addPersonSection() {
  clearInterval(checkElement);
  // Get the data from local storage
  let userData = localStorage.getItem("userData");
  console.log('userData :',userData)
  const allUserData = JSON.parse(userData);
console.log('allUserData :',allUserData)
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
  }
}
