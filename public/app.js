const NUM_RESULTS = 3;
let loadMoreRequests = 0;
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

    if (masEquipos.trim() === "") {
        
        noMoreElements = true;
        document.getElementById("cargar").style.display = "none";
    } else { 
        listaEquipos.innerHTML += masEquipos;
        loadMoreRequests++;
    }
}