 // Fetch data from JSON using the fetch API
 fetch("/db/about-organization.json")
 .then((response) => response.json())
 .then((data) => {
   const cardContainer = document.getElementById("cardContainer");

   // Loop through the data and create card elements
   data.forEach((item) => {
     const cardDiv = document.createElement("div");
     cardDiv.className = "col-md-6 mb-3";
     cardDiv.innerHTML = `
       <div class="card" style="width: 100%">
         <img src="${item.img}" class="card-img-top" alt="Placeholder Image" style="width: 100%; height: auto" />
         <div class="card-body">
           <h5 class="card-title">${item.heading}</h5>
           <p class="card-text">${item.content}</p>
         </div>
       </div>
     `;

     cardContainer.appendChild(cardDiv);
   });
 })
 .catch((error) => {
   // console.error("Error fetching data:", error);
 });