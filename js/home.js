const home=document.querySelector('.home')

fetch('/home.html')
.then((res)=>res.text())
.then(data=>{
    home.innerHTML=data;
})