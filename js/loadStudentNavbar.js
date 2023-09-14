const nav = document.querySelector(".student-navbar");

fetch('/student-navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data;
});

