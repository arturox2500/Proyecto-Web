const posts = new Map();
let nextId = 0;


addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png", equipo: "Real Madrid", estadio: "Santiago Bernabéu", dia: 6, mes: "marzo", anyo: 1902, titulos: 35, descripcion:''})
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/800px-Deportivo_Alaves_logo_%282020%29.svg.png", equipo: "Alavés", estadio: "Mendizorroza", dia: 23, mes: "enero", anyo: 1921, titulos: 0, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/1200px-Club_Athletic_Bilbao_logo.svg.png", equipo: "Athletic Club", estadio: "San Mamés", dia: 21, mes: "agosto", anyo: 1898, titulos: 8, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png", equipo: "Barcelona", estadio: "Camp Nou", dia: 29, mes: "noviembre", anyo: 1899, titulos: 27, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png", equipo: "Betis", estadio: "Benito Villamarín", dia: 12, mes: "septiembre", anyo: 1907, titulos: 1, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png", equipo: "Celta", estadio: "Abanca-Balaídos", dia: 23, mes: "agosto", anyo: 1923, titulos: 0, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/1200px-Getafe_logo.svg.png", equipo: "Getafe", estadio: "Coliseum Alfonso Pérez", dia: 24, mes: "febrero", anyo: 1946, titulos: 0, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/7/7a/Girona_FC_new_logo.png", equipo: "Girona", estadio: "Montilivi", dia: 23, mes: "julio", anyo: 1930, titulos: 0, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Logo_of_Granada_Club_de_F%C3%BAtbol.svg/1200px-Logo_of_Granada_Club_de_F%C3%BAtbol.svg.png", equipo: "Granada", estadio: "Nuevo Estadio de Los Cármenes", dia: 14, mes: "abril", anyo: 1931, titulos: 0, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/1200px-Villarreal_CF_logo-en.svg.png", equipo: "Villarreal", estadio: "Estadio de la Cerámica", dia: 10, mes: "marzo", anyo: 1923, titulos: 0, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/1200px-Valenciacf.svg.png", equipo: "Valencia", estadio: "Mestalla", dia: 18, mes: "marzo", anyo: 1919, titulos: 6, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png", equipo: "Sevilla", estadio: "Ramón Sánchez-Pizjuán", dia: 25, mes: "enero", anyo: 1890, titulos: 1, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/1200px-Real_Sociedad_logo.svg.png", equipo: "R. Sociedad", estadio: "Reale Arena", dia: 7, mes: "septiembre", anyo: 1909, titulos: 2, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/1200px-Rcd_mallorca.svg.png", equipo: "Mallorca", estadio: "Son Moix", dia: 5, mes: "marzo", anyo: 1916, titulos: 0, descripcion:''});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/1200px-Osasuna_logo.svg.png", equipo: "Osasuna", estadio: "El Sadar", dia: 24, mes: "octubre", anyo: 1920, titulos: 0, descripcion:''});


export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    post.jugadores = [];
    posts.set(post.id, post);
}

export function deletePost(id){
    posts.delete(id);
}

export function getPosts(){
    return [...posts.values()];
}

export function getPost(id){
    return posts.get(id);
}


export function addPlayerToPost(id, jugador) {
    let post = getPost(id);
    if (post) {
        post.jugadores.push(jugador);
    } else {
        console.error(post);
    }
}

export function editPost(id, updatedData) {
    const post = getPost(id);
    if (post) {
        // Update the properties with the new values
        Object.assign(post, updatedData);
    } else {
        console.error(`Post with ID ${id} not found.`);
    }
}

addPlayerToPost('0',{URL: "https://images.daznservices.com/di/library/DAZN_News/30/74/jude-bellingham_1v0ikyvz183qp1twmjf330sl1i.png?t=859595770&w=800", Nombre: "Jude", Apellidos: "Bellingham", Edad: 20, Pos: "Mediocentro", Forma:"Excelente", Precio: 150})
addPlayerToPost('0',{URL: "https://images.daznservices.com/di/library/DAZN_News/cd/c8/vini-jr_1kdanf6c7ibtb169zbibss8rn0.png?t=1483924475", Nombre: "Vinicius", Apellidos: "Junior", Edad: 22, Pos: "Delantero", Forma:"Normal", Precio: 15});

//link, equipo, estadio, dia(opciones), mes(opciones), anyo, titulos, descripcion

export function validForm(body){
    let errorMessage = [];

    if (body.link === "") {
        errorMessage.push("El campo URL es obligatorio");
    }

    if (body.equipo === "") {
        errorMessage.push("El nombre del club es obligatorio");
    }

    if (body.estadio === "") {
        errorMessage.push("El nombre del estadio es obligatorio");
    }

    if (body.dia === "" || body.mes === "" || body.anyo === "") {
        errorMessage.push("La fecha completa (dia, mes y año) es obligatoria");
    } else if (body.anyo<1500){
        errorMessage.push("Por favor introduzca una fecha valida")
    }

    if (body.titulos === "") {
        errorMessage.push("El campo titulos es obligatorio");
    } else if (body.titulos < 0){
        errorMessage.push("El campo titulos no puede ser menor a 0");
    }

    if (body.descripcion === "") {
        errorMessage.push("El campo descripcion es obligatorio");
    }

    return errorMessage;
}
//URL, Nombre, Apellidos, Edad, Pos(check), Forma(opciones), Precio
export function validFormJugador(body){
    let errorMessageJugador = [];

    if (body.URL === "") {
        errorMessageJugador.push("El campo URL es obligatorio");
    }

    if (body.Nombre === "") {
        errorMessageJugador.push("El nombre del jugador es obligatorio");
    }

    if (body.Apellidos === "") {
        errorMessageJugador.push("El apellido del jugador es obligatorio");
    }

    if (body.Edad === "") {
        errorMessageJugador.push("La edad del jugador es obligatoria");
    } else if(body.Edad<0){
        errorMessageJugador.push("La edad del jugador debe ser mayor de 0");
    }
    if (!body.Pos) {
        errorMessageJugador.push("El campo posicion es obligatorio");
    } 
     if (body.Forma === ""){
        errorMessageJugador.push("El campo forma es obligatorio");
    }

    if (body.Precio === "") {
        errorMessageJugador.push("El campo precio es obligatorio");
    } else if (body.Precio<0){
        errorMessageJugador.push("El precio del jugador debe ser mayor que 0");
    }

    

    return errorMessageJugador;
}

