setTimeout(() => {
 
  fetch("/db/about-organization.json")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("cardContainer");

      data.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "col-md-12 mb-3";

        cardDiv.innerHTML = `
            <div class="card" style="width: 18rem">
              <div style="display: flex; flex-direction: row">
                <img
                  src="${item.img}"
                  class="card-img-top"
                  alt="..."
                  style="flex: 1; margin-right: 600px"
                />
                <div class="card-body" style="flex: 2">
                  <h5 class="card-title">${item.heading}</h5>
                  <p class="card-text">${item.content}</p>
                
                </div>
              </div>
            </div>
          `;

        cardContainer.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

}, 50);
