// For load the notification dynamically

fetch("/db/notification.json")
  .then((res) => res.json())
  .then((data) => {
    const checkNews = setInterval(() => {
      if (document.querySelector(".card-body")) {
        loadNews();
      }
    }, 50);
    function loadNews() {
      clearInterval(checkNews);
      const newsElement = document.querySelector(".card-body");

      data.forEach((info) => {
        const heading = info.heading;
        const news = info.news;

        const container = document.createElement("div");
        container.innerHTML = `<h2>${heading}</h2><br><p>${news}</p>`;

        newsElement.appendChild(container);
      });
    }
  });

// For scroll notification bar

const checkNotification = setInterval(() => {
  if (document.querySelector(".card-body")) {
    loadNotificationData();
  }
}, 50);
function loadNotificationData() {
  clearInterval(checkNotification);

  const notificationBarContainer = document.querySelector(".card-body");

  const scrollSpeed = 1;

  function scrollNotificationBar() {
    notificationBarContainer.scrollTop += scrollSpeed;

    if (
      notificationBarContainer.scrollTop >=
      notificationBarContainer.scrollHeight -
        notificationBarContainer.offsetHeight
    ) {
      notificationBarContainer.scrollTop = 0;
    }
  }

  let scrollInterval = setInterval(scrollNotificationBar, 50);

  notificationBarContainer.addEventListener("mouseenter", () => {
    clearInterval(scrollInterval);
  });

  notificationBarContainer.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(scrollNotificationBar, 50);
  });
}
