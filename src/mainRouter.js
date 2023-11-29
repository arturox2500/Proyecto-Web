import express from "express";
import * as mainService from "./mainService.js"

const mainRouter = express.Router();

mainRouter.get("/", (req, res)=>{
    const posts = mainService.getPosts();
    res.render('pagina', { posts });
})


// mainRouter.post('/new-elem', (req, res)=>{
//     res.render('pagina', {
//         link: req.body.link,
//         equipo: req.body.equipo,
//         estadio: req.body.estadio,
//         dia: req.body.dia,
//         mes: req.body.mes,
//         anyo: req.body.anyo,
//         titulos: req.body.titulos,
//     })
// })

mainRouter.post('/new-elem', (req, res) => {

    let { link, equipo, estadio, dia, mes, anyo, titulos} = req.body;

    mainService.addPost({ link, equipo, estadio, dia, mes, anyo, titulos });
    const posts = mainService.getPosts();

    res.render("pagina", { posts });
});

// router.get('/post/:id', (req, res) => {

//     let post = mainService.getPost(req.params.id);

//     res.render('show_post', { post });
// });

// router.get('/post/:id/delete', (req, res) => {

//     mainService.deletePost(req.params.id);

//     res.render('deleted_post');
//});

export default mainRouter;