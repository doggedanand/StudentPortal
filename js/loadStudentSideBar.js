const sideBar = document.getElementById("side-bar");
window.loadSudentSideBar = false;
fetch("/student-side-bar.html")
  .then((res) => res.text())
  .then((data) => {
    sideBar.outerHTML = data;
    window.loadSudentSideBar = true;
 
  });

  window.fnCheckVariable = function(){
   // 
   console.log('--fnCheckVariable------');
  }
