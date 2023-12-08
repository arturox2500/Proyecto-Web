import express from "express";
import * as mainService from "./mainService.js"
// Equipos
const mainRouter = express.Router();

mainRouter.get("/", (req, res)=>{
    const posts = mainService.getPosts();
    res.render('pagina', { posts });
})

mainRouter.post('/new-elem', (req, res) => {

    let { link, equipo, estadio, dia, mes, anyo, titulos, descripcion} = req.body;
    const validationErrors = mainService.validForm(req.body);
    if (validationErrors.length == 0){
        mainService.addPost({ link, equipo, estadio, dia, mes, anyo, titulos, descripcion });
        const posts = mainService.getPosts();
        res.render("pagina", { posts });
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

//router.get('/post/:id/delete', (req, res) => {
//    mainService.deletePost(req.params.id);
//    res.render('deleted_post');
//});

export default mainRouter;