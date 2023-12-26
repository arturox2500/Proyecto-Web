import express from "express";
import * as mainService from "./equipoService.js"
import { getPosts } from './equipoService.js';
// Equipos
const mainRouter = express.Router();

let posts = getPosts(0,6);

mainRouter.get("/", (req, res)=>{
    const firstposts = getPosts(0,6);
    posts = firstposts

    res.render('pagina', { posts });
})

mainRouter.get('/equipos', (req, res) => {
    let searchQuery = req.query.query;
    if (searchQuery != undefined){     
        searchQuery = req.query.query.toLowerCase();  
    }

    if (searchQuery == undefined) {
        const from = parseInt(req.query.from);
        const to = parseInt(req.query.to);
        posts = getPosts(from, to);
        res.render('equipos', { posts });
    } else if (searchQuery =="") {
       let auxposts = getPosts(0, 6);;       
       res.json(auxposts);
    }else {
        let allTeamsMap = mainService.getMap();
        let auxMap = new Map();
        
        allTeamsMap.forEach((team, teamId) => {
            // Check if the team name includes the search query
            if (team.equipo.toLowerCase().includes(searchQuery)) {
                
                auxMap.set(teamId, team);
            }
        });
        const auxObject = Object.fromEntries(auxMap);

        
        res.json(auxObject);

    }
});
mainRouter.get('/Favoritos', (req, res) => {
let id=req.query.Id;
const equipo= mainService.getPost(id);
if(equipo.fav==false){
equipo.fav=true;
}else{
equipo.fav=false;
}

res.json(equipo);

});




mainRouter.post('/new-elem', (req, res) => {

    let { link, equipo, estadio, dia, mes, anyo, titulos, descripcion } = req.body;
    const validationErrors = mainService.validForm(req.body);
    if (validationErrors.length == 0){

        const postId = mainService.addPost({ link, equipo, estadio, dia, mes, anyo, titulos, descripcion });
        const posts = mainService.getPosts();
        res.redirect(`/post/${postId}`);
    }
    else{
        res.render("pagina-nuevo-elemento", {editMode: false, errorMessage:validationErrors, FormData: req.body})
    }    
});

mainRouter.get('/post/:id', (req, res) => {
    let post = mainService.getPost(req.params.id);
    res.render('pagina-detalle', { post });
});

mainRouter.post('/post/:id', (req, res) => {
    let {URL, Nombre, Apellidos, Edad, Pos, Forma, Precio } = req.body;
    const validationErrorsJugador = mainService.validFormJugador(req.body);
    const postId = req.params.id;
    if (validationErrorsJugador.length == 0){
    mainService.addPlayerToPost(postId,{ URL, Nombre, Apellidos, Edad, Pos, Forma, Precio });
    let post = mainService.getPost(postId);
    res.render("pagina-detalle", {post});
    }else{
        let post = mainService.getPost(postId);
        res.render("pagina-detalle",  {post,errorMessageJugador:validationErrorsJugador,FormData: req.body}) 
    }


});

mainRouter.get('/post/:id/delete', (req, res) => {
    mainService.deletePost(req.params.id);
    res.redirect('/');
});

mainRouter.get('/post/:id/edit', (req, res) => {
    const postId = req.params.id;
    const post = mainService.getPost(postId);
    res.render('pagina-nuevo-elemento',  {editMode: true, FormData: {...post, id: post.id} });
});

mainRouter.post('/post/:id/edit', (req, res) => {
    const postId = req.params.id;
    const { link, equipo, estadio, dia, mes, anyo, titulos, descripcion } = req.body;

    const validationErrors = mainService.validForm(req.body);
    if (validationErrors.length == 0){
        

        // Update the existing element with the new values
        mainService.editPost(postId, { link, equipo, estadio, dia, mes, anyo, titulos, descripcion });

        // Redirect to the details page or any other appropriate page
        res.redirect(`/post/${postId}`);
    }
    else{
        const post = mainService.getPost(req.params.id);

        res.render('pagina-nuevo-elemento', {editMode: true, errorMessage: validationErrors, FormData: {...req.body, id: post.id} })
    }

    
});

///////////////////////////////////////////////////nuevo/editar//////////////////////////////////////////////////////
mainRouter.get('/availableURL', (req, res) => {

    let username = req.query.URL;


    let availableUsername = ((mainService.ComprobarURL(username))&&(username!==''));

    let response = {
        available: availableUsername
    }
    res.json(response);
});

mainRouter.get('/availableNombreEquipo', (req, res) => {

    let arrayNombres= mainService.ObtenerNombreEquipos();

    for( let i=0;i<arrayNombres.length;i++){
        arrayNombres[i]=arrayNombres[i].toLowerCase();

    }

    let username = req.query.NombreEquipo;
    let Primera=username;
    username=username.toLowerCase();

    let availableUsername = ((arrayNombres.indexOf(username) === -1) && (mainService.PrimeraLetra(Primera[0])));

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableNombreEstadio', (req, res) => {

    let arrayNombres= mainService.ObtenerNombreEstadios();


    let username = req.query.Estadio;
    let Primera=username;

    let availableUsername = ((arrayNombres.indexOf(username) === -1) && (mainService.PrimeraLetra(Primera[0])));

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableanyoFundacion', (req, res) => {

    let num = req.query.anyoFundacion;



    let availableUsername = (num > 1800)&&(num!=='');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableTitulos', (req, res) => {

    let num = req.query.Titulos;



    let availableUsername = (num > -1)&&(num!=='');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableDia', (req, res) => {

    let num = req.query.Dia;

    let availableUsername = (num >= 1 && num <= 31)&&(num!=='');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableMes', (req, res) => {

    let num = req.query.Mes;

    let availableUsername = (num!=='');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableDescripcion', (req, res) => {

    let Des = req.query.Des;

    let availableUsername = ((Des.length >= 50 && Des.length <= 500) && (Des!==''));

    let response = {
        available: availableUsername
    }
    res.json(response);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////Jugador//////////////////////////////////////////////////////
mainRouter.get('/availableURL', (req, res) => {

    let username = req.query.URL;


    let availableUsername = ((mainService.ComprobarURL(username))&&(username!==''));

    let response = {
        available: availableUsername
    }
    res.json(response);
});


mainRouter.get('/availableNombreEquipo', (req, res) => {

    let username = req.query.NombreEquipo;

    let availableUsername = (username !== '');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableApellidos', (req, res) => {

    let username = req.query.Apellidos;

    let availableUsername = (username !== '');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableEdad', (req, res) => {

    let num = req.query.Edad;



    let availableUsername = (num > -1)&&(num!=='');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availablePos', (req, res) => {

    let num = req.query.Pos;



    let availableUsername = (num!=='');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableForma', (req, res) => {

    let num = req.query.Forma;

    let availableUsername = (num!=='');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availablePrecio', (req, res) => {

    let num = req.query.Precio;



    let availableUsername = (num > -1)&&(num!=='');

    let response = {
        available: availableUsername
    }
    res.json(response);
});
export default mainRouter;