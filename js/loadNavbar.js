// It will apply on every page, means navbar will show in every page
const nav = document.querySelector('.navbar')
fetch('/navbar.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    });