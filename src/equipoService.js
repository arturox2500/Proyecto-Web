const posts = new Map();
let nextId = 0;


addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png", equipo: "Real Madrid", estadio: "Santiago Bernabéu", dia: 6, mes: "marzo", anyo: 1902, titulos: 35, descripcion:"El Real Madrid Club de Fútbol, con sede en Madrid, España, es uno de los clubes de fútbol más icónicos y exitosos del mundo. Fundado en 1902, el Real Madrid ha forjado una rica historia de triunfos y es ampliamente reconocido por su emblemática camiseta blanca. El club compite en la La Liga española y juega sus partidos como local en el estadio Santiago Bernabéu. Con una extensa vitrina de trofeos, el Real Madrid ha ganado numerosas Ligas de Campeones de la UEFA y títulos de La Liga. Han contado con leyendas del fútbol como Di Stéfano, Cristiano Ronaldo y Zidane, y su rivalidad con el Barcelona en el Clásico español es una de las más intensas del deporte. El Real Madrid sigue siendo un referente mundial en el fútbol y continúa atrayendo a aficionados de todo el planeta."})
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/800px-Deportivo_Alaves_logo_%282020%29.svg.png", equipo: "Alavés", estadio: "Mendizorroza", dia: 23, mes: "enero", anyo: 1921, titulos: 0, descripcion:"El Deportivo Alavés, fundado en 1921 en Vitoria-Gasteiz, España, es un club de fútbol con una sólida presencia en La Liga. Conocidos comoBabazorros y vistiendo camisetas azul y blanco, el Alavés juega en el estadio de Mendizorroza. Aunque ha experimentado ascensos y descensos, el equipo ha dejado su huella en competiciones nacionales e internacionales. Su mayor logro fue llegar a la final de la UEFA Europa League en 2001. La pasión de sus seguidores y la dedicación del club han consolidado al Alavés como un participante respetado en el fútbol español. Su enfoque resiliente y determinado continúa siendo una inspiración para sus seguidores."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/1200px-Club_Athletic_Bilbao_logo.svg.png", equipo: "Athletic Club", estadio: "San Mamés", dia: 21, mes: "agosto", anyo: 1898, titulos: 8, descripcion:"El Athletic Club, fundado en 1898 en Bilbao, España, es un club de fútbol con una historia única y arraigada en sus principios. Conocido como Los Leones, el Athletic es reconocido por su política de cantera, solo permitiendo jugadores nacidos o formados en el País Vasco. El equipo juega en el estadio San Mamés, apodado La Catedral. A lo largo de su trayectoria, el Athletic ha cosechado éxitos, destacando sus múltiples títulos de La Liga y Copas del Rey. Su estilo de juego apasionado y el fervor de su afición han convertido al club en un símbolo de identidad vasca en el fútbol español."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png", equipo: "Barcelona", estadio: "Camp Nou", dia: 29, mes: "noviembre", anyo: 1899, titulos: 27, descripcion:"El Fútbol Club Barcelona, fundado en 1899 en Barcelona, España, es un gigante del fútbol conocido por su distintiva camiseta azul y grana. El Barça, como se le conoce afectuosamente, juega en el Camp Nou, uno de los estadios más grandes de Europa. Su rica historia está marcada por una filosofía de juego atractivo y talento excepcional. Compitiendo en la La Liga, el Barcelona ha ganado numerosos títulos, incluyendo múltiples Ligas de Campeones de la UEFA. Figuras legendarias como Messi, Xavi e Iniesta han dejado una huella imborrable. La rivalidad intensa con el Real Madrid en el Clásico español es emblemática. El Barcelona, más que un club, es una institución que fusiona éxito deportivo y valores arraigados en la identidad catalana."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png", equipo: "Betis", estadio: "Benito Villamarín", dia: 12, mes: "septiembre", anyo: 1907, titulos: 1, descripcion:"El Real Betis Balompié, fundado en 1907 en Sevilla, España, es un club de fútbol con una rica historia y una base de seguidores apasionados. Conocidos como Los Verdiblancos por sus colores verdiblancos característicos, juegan en el estadio Benito Villamarín. A lo largo de los años, el Betis ha experimentado éxitos tanto en competiciones nacionales como internacionales, destacando su título de La Liga en la temporada 1934-35. El club se distingue por su estilo de juego ofensivo y su compromiso con la cantera. La afición bética, apodada La Palmera, contribuye a la atmósfera vibrante en cada encuentro. El Real Betis sigue siendo una entidad respetada en el fútbol español, combinando tradición y pasión en su camino."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png", equipo: "Celta", estadio: "Abanca-Balaídos", dia: 23, mes: "agosto", anyo: 1923, titulos: 0, descripcion:"El Real Club Celta de Vigo, fundado en 1923 en Vigo, Galicia, es un club de fútbol con una historia marcada por momentos emocionantes y una base de seguidores leales. Conocidos como Os Celestes por sus colores celeste y blanco, juegan en el estadio Balaídos. Aunque ha experimentado altibajos, el Celta ha dejado su huella en La Liga y ha participado en competiciones europeas. Su estilo de juego atractivo y enfoque en el desarrollo de talento joven son características distintivas. La afición celtista, apasionada y entregada, contribuye a la atmósfera única en cada encuentro. El Celta de Vigo sigue siendo un equipo valiente y respetado en el fútbol español."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/1200px-Getafe_logo.svg.png", equipo: "Getafe", estadio: "Coliseum Alfonso Pérez", dia: 24, mes: "febrero", anyo: 1946, titulos: 0, descripcion:"El Getafe Club de Fútbol, fundado en 1946 en Getafe, Madrid, ha emergido como un actor destacado en el fútbol español. Conocidos como Azulones por su distintivo color azul, disputan sus partidos en el estadio Coliseum Alfonso Pérez. El Getafe ha experimentado un ascenso meteórico a las divisiones superiores y ha consolidado su posición en La Liga. Destacan por su estilo de juego táctico y sólido en defensa. Aunque relativamente joven en comparación con algunos de sus rivales, el Getafe ha participado en competiciones europeas y ha desafiado a equipos de mayor renombre, ganándose un respeto creciente en la escena futbolística española."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/7/7a/Girona_FC_new_logo.png", equipo: "Girona", estadio: "Montilivi", dia: 23, mes: "julio", anyo: 1930, titulos: 0, descripcion:"El Girona Fútbol Club, fundado en 1930 en Girona, Cataluña, es un club de fútbol que ha experimentado un ascenso notable en el fútbol español en las últimas décadas. Apodados Blanquivermells por sus colores blanco y rojo, juegan en el estadio Montilivi. Después de varios años en las divisiones inferiores, el Girona logró alcanzar La Liga y ha mantenido una presencia respetable en la competición. Su estilo de juego enfocado en la posesión y su capacidad para desafiar a equipos más establecidos han ganado admiración. Aunque el club ha enfrentado desafíos, su ascenso refleja su compromiso y contribución al panorama futbolístico catalán."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Logo_of_Granada_Club_de_F%C3%BAtbol.svg/1200px-Logo_of_Granada_Club_de_F%C3%BAtbol.svg.png", equipo: "Granada", estadio: "Nuevo Estadio de Los Cármenes", dia: 14, mes: "abril", anyo: 1931, titulos: 0, descripcion:"El Granada Club de Fútbol, fundado en 1931 en Granada, España, es un equipo con una historia que ha experimentado altibajos, pero que ha resurgido con fuerza en las últimas temporadas. Conocidos como Los Nazaríes, el equipo juega en el estadio Nuevo Los Cármenes. Después de varias temporadas en las divisiones inferiores, el Granada ha logrado ascender a La Liga y consolidarse como un competidor respetable. Su estilo de juego resiliente y su capacidad para desafiar a equipos de mayor envergadura han sido destacados. El Granada ha participado en competiciones europeas, reflejando su resurgimiento y contribución al emocionante panorama del fútbol español."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/1200px-Villarreal_CF_logo-en.svg.png", equipo: "Villarreal", estadio: "Estadio de la Cerámica", dia: 10, mes: "marzo", anyo: 1923, titulos: 0, descripcion:"El Villarreal Club de Fútbol, fundado en 1923 en Vila-real, Castellón, es un club que ha alcanzado reconocimiento tanto a nivel nacional como internacional. Conocidos como El Submarino Amarillo por sus colores amarillo y azul, juegan en el estadio de la Cerámica. El Villarreal ha experimentado un ascenso meteórico en las últimas décadas y se ha consolidado como un competidor constante en La Liga. Han participado en competiciones europeas, incluyendo la Liga de Campeones de la UEFA. La filosofía de juego atractivo y el enfoque en el desarrollo de talento han definido al Villarreal, convirtiéndolo en un equipo respetado y temido en el fútbol español."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/1200px-Valenciacf.svg.png", equipo: "Valencia", estadio: "Mestalla", dia: 18, mes: "marzo", anyo: 1919, titulos: 6, descripcion:"El Valencia Club de Fútbol, fundado en 1919 en Valencia, España, es un club con una rica historia y una presencia destacada en el fútbol español. Conocidos como Los Che, juegan en el estadio Mestalla, uno de los estadios más antiguos de España. A lo largo de su trayectoria, el Valencia ha logrado éxitos significativos, incluyendo múltiples títulos de La Liga y Copas del Rey. También han tenido destacadas participaciones en competiciones europeas, llegando a dos finales consecutivas de la Liga de Campeones de la UEFA en los primeros años del siglo XXI. La pasión de sus seguidores y su contribución al fútbol español han consolidado al Valencia como un club de renombre."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png", equipo: "Sevilla", estadio: "Ramón Sánchez-Pizjuán", dia: 25, mes: "enero", anyo: 1890, titulos: 1, descripcion:"El Sevilla Fútbol Club, fundado en 1890 en Sevilla, Andalucía, es un club con una rica historia y un impresionante palmarés. Conocido como Los Nervionenses o Los Rojiblancos por sus colores rojo y blanco, juegan en el estadio Ramón Sánchez-Pizjuán. El Sevilla ha sido un protagonista constante en La Liga y ha destacado en competiciones europeas, ganando múltiples títulos de la Liga Europa de la UEFA. Su estilo de juego dinámico y su capacidad para desarrollar y potenciar talento han contribuido a su éxito continuo. Además, su afición apasionada y el ambiente vibrante en el Sánchez-Pizjuán han consolidado al Sevilla como uno de los clubes más exitosos y respetados en España."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/1200px-Real_Sociedad_logo.svg.png", equipo: "R. Sociedad", estadio: "Reale Arena", dia: 7, mes: "septiembre", anyo: 1909, titulos: 2, descripcion:"La Real Sociedad de Fútbol, fundada en 1909 en San Sebastián, País Vasco, es un club con una rica historia y un legado significativo en el fútbol español. Conocidos como Txuriurdines por sus colores azul y blanco, juegan en el estadio Reale Arena. A lo largo de los años, la Real Sociedad ha participado en La Liga y ha tenido destacadas actuaciones tanto a nivel nacional como internacional. Han ganado títulos de liga y copas, y su estilo de juego técnico y atractivo ha ganado admiradores. La Real Sociedad se distingue también por su compromiso con la cantera y el desarrollo de jóvenes talentos, lo que ha contribuido a su éxito y a su posición respetada en el fútbol español."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/1200px-Rcd_mallorca.svg.png", equipo: "Mallorca", estadio: "Son Moix", dia: 5, mes: "marzo", anyo: 1916, titulos: 0, descripcion:"El Real Club Deportivo Mallorca, fundado en 1916 en Palma de Mallorca, Islas Baleares, es un club de fútbol con una larga trayectoria en el fútbol español. Conocido como Los Bermellones, el equipo juega en el estadio Visit Mallorca Estadi. A lo largo de su historia, el Mallorca ha experimentado ascensos y descensos, pero ha dejado una marca importante en el fútbol español. Han competido en La Liga y en competiciones europeas, mostrando un estilo de juego dinámico y competitivo. La pasión de sus seguidores y su contribución al panorama futbolístico de las Islas Baleares han consolidado al Mallorca como un representante destacado en el fútbol español."});
addPost({link: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/1200px-Osasuna_logo.svg.png", equipo: "Osasuna", estadio: "El Sadar", dia: 24, mes: "octubre", anyo: 1920, titulos: 0, descripcion:"El Club Atlético Osasuna, fundado en 1920 en Pamplona, Navarra, es un club de fútbol con una arraigada identidad regional y un papel destacado en el fútbol español. Conocidos como Los Rojillos, el equipo juega en el estadio El Sadar. Aunque ha experimentado ascensos y descensos, Osasuna ha mantenido una presencia constante en La Liga, participando en emocionantes duelos y consolidándose como un equipo respetado. Su estilo de juego caracterizado por la entrega y la intensidad defensiva ha sido una marca distintiva. La afición, conocida como La Grada, contribuye a crear un ambiente apasionado en El Sadar. Osasuna ha representado con orgullo a la región de Navarra en el escenario futbolístico español."});


export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    post.jugadores = [];
    posts.set(post.id, post);
    return id
}

export function deletePost(id){
    posts.delete(id);
}

export function getPosts(from, to){
    let values = [...posts.values()];
    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
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

