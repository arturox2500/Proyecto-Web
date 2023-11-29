const posts = new Map();
let nextId = 0;


addPost({link: "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png", equipo: "Real Madrid", estadio: "Santiago Bernabéu", dia: 6, mes: "marzo", anyo: 1902, titulos: 35})
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/800px-Deportivo_Alaves_logo_%282020%29.svg.png", equipo: "Alavés", estadio: "Mendizorroza", dia: 23, mes: "enero", anyo: 1921, titulos: 0});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/1200px-Club_Athletic_Bilbao_logo.svg.png", equipo: "Athletic Club", estadio: "San Mamés", dia: 21, mes: "agosto", anyo: 1898, titulos: 8});
addPost({link: "https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png", equipo: "Barcelona", estadio: "Camp Nou", dia: 29, mes: "noviembre", anyo: 1899, titulos: 27});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png", equipo: "Betis", estadio: "Benito Villamarín", dia: 12, mes: "septiembre", anyo: 1907, titulos: 1});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png", equipo: "Celta", estadio: "Abanca-Balaídos", dia: 23, mes: "agosto", anyo: 1923, titulos: 0});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/1200px-Getafe_logo.svg.png", equipo: "Getafe", estadio: "Coliseum Alfonso Pérez", dia: 24, mes: "febrero", anyo: 1946, titulos: 0});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/7/7a/Girona_FC_new_logo.png", equipo: "Girona", estadio: "Montilivi", dia: 23, mes: "julio", anyo: 1930, titulos: 0});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Logo_of_Granada_Club_de_F%C3%BAtbol.svg/1200px-Logo_of_Granada_Club_de_F%C3%BAtbol.svg.png", equipo: "Granada", estadio: "Nuevo Estadio de Los Cármenes", dia: 14, mes: "abril", anyo: 1931, titulos: 0});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/1200px-Villarreal_CF_logo-en.svg.png", equipo: "Villarreal", estadio: "Estadio de la Cerámica", dia: 10, mes: "marzo", anyo: 1923, titulos: 0});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/1200px-Valenciacf.svg.png", equipo: "Valencia", estadio: "Mestalla", dia: 18, mes: "marzo", anyo: 1919, titulos: 6});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png", equipo: "Sevilla", estadio: "Ramón Sánchez-Pizjuán", dia: 25, mes: "enero", anyo: 1890, titulos: 1});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/1200px-Real_Sociedad_logo.svg.png", equipo: "R. Sociedad", estadio: "Reale Arena", dia: 7, mes: "septiembre", anyo: 1909, titulos: 2});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/1200px-Rcd_mallorca.svg.png", equipo: "Mallorca", estadio: "Son Moix", dia: 5, mes: "marzo", anyo: 1916, titulos: 0});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/1200px-Osasuna_logo.svg.png", equipo: "Osasuna", estadio: "El Sadar", dia: 24, mes: "octubre", anyo: 1920, titulos: 0});

export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
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