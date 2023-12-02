import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import mainRouter from './mainRouter.js';

const app = express();

app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), ".html");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.use('/', mainRouter);

app.get('/pagina-nuevo-elemento', (req, res) => {
    res.render('pagina-nuevo-elemento');
});

app.listen(3000, () => console.log('Listening on port 3000!'));