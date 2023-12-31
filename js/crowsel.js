const checkCrowsel = setInterval(() => {
  if (document.querySelector(".carousel-inner")) {
    loadCrowsel();
  }
},1000);

function loadCrowsel() {
  clearInterval(checkCrowsel);

  fetch("/db/crowsel.json")
    .then((response) => response.json())
    .then((data) => {
      const carouselInner = document.querySelector(".carousel-inner");

      data.forEach((item, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        const imgElement = document.createElement("img");
        imgElement.src = item.image_url;
        imgElement.classList.add("d-block", "w-100");
        if (index === 0) {
          carouselItem.classList.add("active");
        }

        carouselItem.appendChild(imgElement);
        carouselInner.appendChild(carouselItem);
      });

      // For show carousel again and again
      const carouselItems = document.querySelectorAll(".carousel-item");

      let currentItemIndex = 0;

      function showCurrentItem() {
        carouselItems.forEach((item, index) => {
          if (currentItemIndex === carouselItems.length) {
            currentItemIndex = 0;
          }

          if (index === currentItemIndex) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }

      function showNextItem() {
        currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
        showCurrentItem();
      }

      function showPreviousItem() {
        currentItemIndex =
          (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
        showCurrentItem();
      }

      const nextButton = document.querySelector(".carousel-control-next");
      const prevButton = document.querySelector(".carousel-control-prev");

      nextButton.addEventListener("click", showNextItem);
      prevButton.addEventListener("click", showPreviousItem);

      setInterval(showNextItem, 5000);
    })
    .catch((error) => console.error("Error loading JSON file:", error));
}
