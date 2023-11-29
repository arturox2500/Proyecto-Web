import express from "express";

const mainRouter = express.Router();

mainRouter.get("/", (req, res)=>{
    res.render('pagina')
})


mainRouter.post('/new-elem', (req, res)=>{
    res.render('pagina', {
        link: req.body.link,
        equipo: req.body.equipo,
        estadio: req.body.estadio,
        dia: req.body.dia,
        mes: req.body.mes,
        anyo: req.body.anyo,
        titulos: req.body.titulos,
    })
})

export default mainRouter;