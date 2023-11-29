import express from "express";
import * as mainService from "./mainService.js"

const mainRouter = express.Router();

mainRouter.get("/", (req, res)=>{
    const posts = mainService.getPosts();
    res.render('pagina', { posts });
})


mainRouter.post('/new-elem', (req, res) => {

    let { link, equipo, estadio, dia, mes, anyo, titulos} = req.body;

    mainService.addPost({ link, equipo, estadio, dia, mes, anyo, titulos });
    const posts = mainService.getPosts();

    res.render("pagina", { posts });
});

mainRouter.get('/post/:nombre', (req, res) => {
    let post = mainService.getPost(req.params.nombre);
    res.render('pagina-detalle', { post });
});

// router.get('/post/:id/delete', (req, res) => {

//     mainService.deletePost(req.params.id);

//     res.render('deleted_post');
//});

export default mainRouter;