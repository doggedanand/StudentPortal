setTimeout(() => {
  fetch("/db/about-organization.json")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("cardContainer");

      data.forEach((item) => {
        const cardDiv = document.createElement("div");

        cardDiv.className = " col-md-12  mb-3";
        if (item.row == "first") {
          cardDiv.innerHTML = `
          <div class="card mb-3 text-center" style="max-width: 1141px">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src="${item.img}"
                class="img-fluid rounded-start"
                alt="..."
                style="margin-right: 20px"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">${item.heading}</h5>
                <p class="card-text">
                  ${item.content}
                </p>
              </div>
            </div>
          </div>
        </div>
            `;
        } else {
          cardDiv.innerHTML = `
          <div class="card mb-3 text-center" style="max-width: 1141px">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">${item.heading}</h5>
                <p class="card-text">
                  ${item.content}
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src="${item.img}"
                class="img-fluid rounded-start"
                alt="..."
                style="margin-right: 20px"
              />
            </div>
          </div>
        </div>
            `;
        }

        cardContainer.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, 50);
