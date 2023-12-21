import express from "express";
import * as mainService from "./equipoService.js"
import { getPosts } from './equipoService.js';
// Equipos
const mainRouter = express.Router();

mainRouter.get("/", (req, res)=>{
    const posts = getPosts(0,6);

    res.render('pagina', { posts });
})

mainRouter.get('/equipos', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);
    const posts = getPosts(from,to);

    res.render('equipos', { posts });
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
        res.render("pagina-nuevo-elemento", {errorMessage:validationErrors, FormData: req.body})
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
    res.render('pagina-editar-elemento',  { FormData: {...post, id: post.id} });
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

        res.render('pagina-editar-elemento', { errorMessage: validationErrors, FormData: {...req.body, id: post.id} })
    }

    
});
mainRouter.get('/availableNombreEquipo', (req, res) => {

    let arrayNombres= mainService.ObtenerNombreEquipos();

    for( let i=0;i<arrayNombres.length;i++){
        arrayNombres[i]=arrayNombres[i].toLowerCase();

    }

    let username = req.query.NombreEquipo;
    username=username.toLowerCase();

    let availableUsername = arrayNombres.indexOf(username) === -1;

    let response = {
        available: availableUsername
    }
    res.json(response);
});
mainRouter.get('/availableanyoFundacion', (req, res) => {

    let username = req.query.anyoFundacion;


    let availableUsername = (username > 1800);

    let response = {
        available: availableUsername
    }
    res.json(response);
});
export default mainRouter;