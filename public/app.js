const NUM_RESULTS = 3;
let loadMoreRequests = 1;
let noMoreElements = false; 
let EquiposFavoritos=[];
let actfav=false;

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

document.addEventListener("DOMContentLoaded", function () {

   const formaElements = document.querySelectorAll('.forma-indicator');

   formaElements.forEach(function (element) {
       const formaValue = element.textContent;

       switch (formaValue) {
           case 'Excelente':
               element.style.color = 'green'; 
               break;
           case 'Normal':
               element.style.color = 'orange'; 
               break;
           case 'Mala':
               element.style.color = 'red'; 
               break;
           default:
               break;
       }
   });
});


document.addEventListener('DOMContentLoaded', function () {
   const searchInput = document.getElementById('searchInput'); 
   searchInput.addEventListener('input', searchTeams);
});

async function searchTeams() {
   const searchQuery = document.getElementById('searchInput').value;

   
   const response = await fetch(`/equipos?query=${searchQuery}`);
   
   if (response.ok) {
       // Request was successful
       const result = await response.json();
       
       if (searchQuery.trim() === "") {
         loadMoreRequests = 1;
     }
       // Update 
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


   // Clear existing content in the container
   equiposWrapper.innerHTML = '';

   // Check if teams has properties
   if (teams) {
       for (const teamId in teams) {
           if (teams.hasOwnProperty(teamId)) {
               const teamDetails = teams[teamId];

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
                        <button class="btn btn-secondary fav-icon" id="botonFav{{id}}" onclick='Favoritos("{{id}}")'>♥</button>
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




async function Favoritos(ID) {   
const response = await fetch(`/Favoritos?Id=${ID}`);
const equipo = await response.json();
if(equipo.fav==true){
EquiposFavoritos.push(equipo);

}else if(equipo.fav==false){
   EquiposFavoritos=EquiposFavoritos.filter(objeto => objeto.id !== equipo.id);
}
cambiarcolorboton(equipo);
}


async function MostrarFavoritos() {
   if(actfav==false){
      actfav=true;
      document.getElementById("cargar").style.display = "none";  
      bool=actfav;
      const response = await fetch(`/MostrarFav?&bool=${bool}`);
      const masEquipos = await response.text();

  
      const listaEquipos = document.getElementById("listaEquipos");
      if (masEquipos.trim() === "") {      
         listaEquipos.innerHTML = "No hay elementos favoritos";
     } else {
         listaEquipos.innerHTML = masEquipos;
     }
      
   }else{

      actfav=false;
      document.getElementById("cargar").style.display = "";
      loadMoreRequests = 1;
      const response = await fetch(`/equipos?from=${0}&to=${6}`);
      const masEquipos = await response.text();

      const listaEquipos = document.getElementById("listaEquipos");
      listaEquipos.innerHTML = '';
      listaEquipos.innerHTML += masEquipos;
   }

      
}


async function cambiarcolorboton(equipo){
   const boton =document.getElementById("botonFav"+equipo.id);
   if(equipo.fav==true){  
      boton.style.color='gold';
   setTimeout(function(){
      boton.style.color='white';
  }, 200);
   }else if(equipo.fav==false){
   boton.style.color='gray';
   const response = await fetch(`/MostrarFav`);
   const masEquipos = await response.text();
   console.log(masEquipos)
   if (actfav){
      setTimeout(function(){
         if (masEquipos.trim() === "") {      
            listaEquipos.innerHTML = "No hay elementos favoritos";
        } else {
            listaEquipos.innerHTML = masEquipos;
        }
     }, 250);
   } else{
      setTimeout(function(){
         boton.style.color = 'white';
     }, 250);
   }
   
   
}
}

//////////////////////////////////////////Nuevo/editar//////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Form Jugadores/////////////////////////////////////////////////////
async function checkImagenAvailability() {

   let usernameInput = document.getElementById('Imagen');

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

   const messageDiv = document.getElementById('mensajeImagen');
   messageDiv.innerHTML = message;

}
async function checkNombreJugadorAvailability() {

   let usernameInput = document.getElementById('NombreJugador');

   let username = usernameInput.value;

   const response = await fetch(`/availableNombreEquipo?NombreEquipo=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Nombre no Valido</p>'
      }else{
         message='<p>Nombre  valido</p>'
      }

   const messageDiv = document.getElementById('mensajeNombreJugador');
   messageDiv.innerHTML = message;

}
async function checkApellidosAvailability() {

   let usernameInput = document.getElementById('Apellidos');

   let username = usernameInput.value;

   const response = await fetch(`/availableApellidos?Apellidos=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Apellido no valido</p>'
      }else{
         message='<p>Apellido valido</p>'
      }

   const messageDiv = document.getElementById('mensajeApellidos');
   messageDiv.innerHTML = message;

}
async function checkEdadAvailability() {

   let usernameInput = document.getElementById('Edad');

   let username = usernameInput.value;

   const response = await fetch(`/availableEdad?Edad=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Edad no Valida</p>'
      }else{
         message='<p>Edad valida</p>'
      }

   const messageDiv = document.getElementById('mensajeEdad');
   messageDiv.innerHTML = message;

}
async function checkPosAvailability() {

   let usernameInput = document.getElementById('Pos');

   let username = usernameInput.value;

   const response = await fetch(`/availablePos?Pos=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Posicion sin insertar</p>'
      }else{
         message='<p style="color: green;">Posicion Valida</p>'
      }

   const messageDiv = document.getElementById('mensajePos');
   messageDiv.innerHTML = message;

}
async function checkFormaAvailability() {

   let usernameInput = document.getElementById('Forma');

   let username = usernameInput.value;

   const response = await fetch(`/availableForma?Forma=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Forma no valida</p>'
      }else{
         message='<p>Forma valida</p>'
      }

   const messageDiv = document.getElementById('mensajeForma');
   messageDiv.innerHTML = message;

}
async function checkPrecioAvailability() {

   let usernameInput = document.getElementById('Precio');

   let username = usernameInput.value;

   const response = await fetch(`/availablePrecio?Precio=${username}`);

   const responseObj = await response.json();
   console.log(responseObj)

   let message = responseObj.available;

      if(message===false){ 
       message='<p style="color: red;">Precio no valido</p>'
      }else{
         message='<p>Precio valido</p>'
      }

   const messageDiv = document.getElementById('mensajePrecio');
   messageDiv.innerHTML = message;

}