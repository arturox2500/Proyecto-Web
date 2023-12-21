const NUM_RESULTS = 3;
let loadMoreRequests = 1;
let noMoreElements = false; 

async function loadElements() {
    if (noMoreElements) {      
        return;
    }

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/equipos?from=${from}&to=${to}`);

    const masEquipos = await response.text();

    const listaEquipos = document.getElementById("listaEquipos");

    listaEquipos.innerHTML += masEquipos;
    loadMoreRequests++;
    
    const nextFrom = from + NUM_RESULTS;
    const nextTo = to + NUM_RESULTS;

    const nextResponse = await fetch(`/equipos?from=${nextFrom}&to=${nextTo}`);
    const nextEquipos = await nextResponse.text();

    if (nextEquipos.trim() === "") {      
        noMoreElements = true;
        document.getElementById("cargar").style.display = "none";

    }

}


document.addEventListener('DOMContentLoaded', function () {
   const searchInput = document.getElementById('searchInput'); 
   searchInput.addEventListener('input', searchTeams);
});

async function searchTeams() {
   const searchQuery = document.getElementById('searchInput').value;

   // Perform the search using AJAX with a GET request to "/equipos"
   const response = await fetch(`/equipos?query=${searchQuery}`);
   
   if (response.ok) {
       // Request was successful
       const result = await response.json();
       console.log(result);
       if (searchQuery.trim() === "") {
         loadMoreRequests = 1;
     }
       // Update the displayed teams based on the server response
       updateDisplayedTeams(result, searchQuery);
   } else {
       // Request failed
       console.error('Search request failed');
   }
}

function updateDisplayedTeams(teams, searchQuery) {
   const equiposWrapper = document.getElementById('listaEquipos');
   let match = searchQuery.toLowerCase();
   if (match!= ""){
      document.getElementById("cargar").style.display = "none";
   } else{
      document.getElementById("cargar").style.display = "";
   }


   console.log(equiposWrapper);
   console.log(match);

   // Clear existing content in the container
   equiposWrapper.innerHTML = '';

   // Check if teams has properties
   if (teams) {
       for (const teamId in teams) {
           if (teams.hasOwnProperty(teamId)) {
               const teamDetails = teams[teamId];

               // Use the teamDetails to update the HTML using your template
               const teamHTML = `
               <div class="equipo-wrapper">
                  <div class="equipo-div">
                     <div class="equipo-img">
                        <img src="${teamDetails.link}" alt="logo ${teamDetails.equipo}">
                     </div>
                     <div class="equipo-text">
                        <h4>${teamDetails.equipo}</h4>
                     </div>
                  </div>
                  <div class="equipo-info">
                     <div class="eq-texto">
                        <p><b>Estadio: </b>${teamDetails.estadio}</p>
                        <p><b>Fecha de Fundación: </b>${teamDetails.dia} de ${teamDetails.mes} de ${teamDetails.anyo}</p>
                        <p><b>Número de Títulos de Liga: </b>${teamDetails.titulos}</p>
                     </div>
                     <div class="eq-boton">
                        <a href="post/${teamDetails.id}" class="btn btn-secondary btn-sm" id="boton">Mas info</a>
                     </div>
                  </div>
               </div>
           `;

               // Append the team HTML to the container
               equiposWrapper.innerHTML += teamHTML;
           }
       }
   }
}

async function checkNommbreEquipoAvailability() {

   let usernameInput = document.getElementById('NombreEquipo');

   let username = usernameInput.value;

   const response = await fetch(`/availableNombreEquipo?NombreEquipo=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p>Nombre no disponible</p>'
      }else{
         message='<p>Nombre  disponible</p>'
      }

   const messageDiv = document.getElementById('mensajeNombreEquipo');
   messageDiv.innerHTML = message;

}
async function checkanyoFundacionAvailability() {

   let usernameInput = document.getElementById('anyoFundacion');

   let username = usernameInput.value;

   const response = await fetch(`/availableanyoFundacion?anyoFundacion=${username}`);

   const responseObj = await response.json();

   let message = responseObj.available;

      if(message===false){ 
       message='<p>Fecha NO valida</p>'
      }else{
         message='<p>Fecha adecuada</p>'
      }

   const messageDiv = document.getElementById('mensajeanyoFundacion');
   messageDiv.innerHTML = message;

}