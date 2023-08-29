// For load the notification dynamically

document.addEventListener("DOMContentLoaded", function () {
  fetch("/db/notification.json")
    .then((res) => res.json())
    .then((data) => {
      const newsElement = document.querySelector(".card-body");

      data.forEach((info) => {
        const heading = info.heading;
        const news = info.news;

        const container = document.createElement("div");
        container.innerHTML = `<h2>${heading}</h2><br><p>${news}</p>`;

        newsElement.appendChild(container);
      });
    });
});

// For scroll notification bar

setTimeout(() => {
  // Get a reference to the notification bar container
  const notificationBarContainer = document.querySelector(".card-body");

  // Define the scroll speed (adjust as needed)
  const scrollSpeed = 1; // Increase for slower scrolling, decrease for faster scrolling

  // Function to scroll the notification bar content
  function scrollNotificationBar() {
    notificationBarContainer.scrollTop += scrollSpeed;

    // Reset the scroll position when it reaches the end
    if (
      notificationBarContainer.scrollTop >=
      notificationBarContainer.scrollHeight -
        notificationBarContainer.offsetHeight
    ) {
      notificationBarContainer.scrollTop = 0;
    }
  }

  // Set the scrolling interval
  let scrollInterval = setInterval(scrollNotificationBar, 50); // Adjust the interval as needed

  // Pause scrolling when the mouse hovers over the notification bar
  notificationBarContainer.addEventListener("mouseenter", () => {
    clearInterval(scrollInterval);
  });

  // Resume scrolling when the mouse leaves the notification bar
  notificationBarContainer.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(scrollNotificationBar, 50);
  });
}, 50);
