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

async function checkNombreEquipoAvailability() {

   let usernameInput = document.getElementById('NombreEquipo');

   let username = usernameInput.value;

   const response = await fetch(`/availableNombreEquipo?NombreEquipo=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Nombre no disponible</p>'
      }else{
         message='<p>Nombre  disponible</p>'
      }

   const messageDiv = document.getElementById('mensajeNombreEquipo');
   messageDiv.innerHTML = message;

}
async function checkEstadioAvailability() {

   let usernameInput = document.getElementById('Estadio');

   let username = usernameInput.value;

   const response = await fetch(`/availableNombreEstadio?Estadio=${username}`);

   const responseObj = await response.json();

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Estadio no disponible</p>'
      }else{
         message='<p>Estadio disponible</p>'
      }

   const messageDiv = document.getElementById('mensajeEstadio');
   messageDiv.innerHTML = message;

}
async function checkanyoFundacionAvailability() {

   let usernameInput = document.getElementById('anyoFundacion');

   let username = usernameInput.value;

   const response = await fetch(`/availableanyoFundacion?anyoFundacion=${username}`);

   const responseObj = await response.json();

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;" >Fecha NO valida</p>'
      }else{
         message='<p>Fecha adecuada</p>'
      }

   const messageDiv = document.getElementById('mensajeanyoFundacion');
   messageDiv.innerHTML = message;

}
async function checkTitulosAvailability() {

   let usernameInput = document.getElementById('Titulos');

   let username = usernameInput.value;

   const response = await fetch(`/availableTitulos?Titulos=${username}`);

   const responseObj = await response.json();

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;" >Titulos NO validos</p>'
      }else{
         message='<p>Titulos adecuados</p>'
      }

   const messageDiv = document.getElementById('mensajeTitulos');
   messageDiv.innerHTML = message;

}
async function checkDiaAvailability() {

   let usernameInput = document.getElementById('Dia');

   let username = usernameInput.value;

   const response = await fetch(`/availableDia?Dia=${username}`);

   const responseObj = await response.json();

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;" >Dia NO valido</p>'
      }else{
         message='<p>Dia adecuado</p>'
      }

   const messageDiv = document.getElementById('mensajeDia');
   messageDiv.innerHTML = message;

}
async function checkMesAvailability() {

   let usernameInput = document.getElementById('Mes');

   let username = usernameInput.value;

   const response = await fetch(`/availableMes?Mes=${username}`);

   const responseObj = await response.json();

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;" >Mes NO valido</p>'
      }else{
         message='<p>Mes adecuado</p>'
      }

   const messageDiv = document.getElementById('mensajeMes');
   messageDiv.innerHTML = message;

}
async function checkDescripcionAvailability() {

   let usernameInput = document.getElementById('Descripcion');

   let username = usernameInput.value;

   const response = await fetch(`/availableDescripcion?Des=${username}`);

   const responseObj = await response.json();

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Descripcion no valida(50-500)</p>'
      }else{
         message='<p>Descripcion adecuada</p>'
      }

   const messageDiv = document.getElementById('mensajeDescripcion');
   messageDiv.innerHTML = message;

}
async function checkURLAvailability() {

   let usernameInput = document.getElementById('URL');

   let username = usernameInput.value;

   const response = await fetch(`/availableURL?URL=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Introduce una URL valida</p>'
      }else{
         message='<p>URL valida</p>'
      }

   const messageDiv = document.getElementById('mensajeURL');
   messageDiv.innerHTML = message;

}