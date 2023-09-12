const home=document.querySelector('.home')

fetch('/home-page.html')
.then((res)=>res.text())
.then(data=>{
    home.innerHTML=data;
});