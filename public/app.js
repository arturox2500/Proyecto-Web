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
   // Select the search input
   const searchInput = document.getElementById('searchInput');

   // Attach an event listener to the input
   searchInput.addEventListener('input', searchTeams);
});

function searchTeams() {
   const input = document.getElementById('searchInput').value.toLowerCase();
   const teams = document.getElementsByClassName('equipo-wrapper');

   for (const team of teams) {
      const teamName = team.getElementsByTagName('h4')[0].innerText.toLowerCase();

      if (teamName.includes(input)) {
         team.style.display = ''; // Show the team
      } else {
         team.style.display = 'none'; // Hide the team
      }
   }
}
