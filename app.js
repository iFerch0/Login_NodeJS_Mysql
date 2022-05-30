//1 invocamos express
const express = require('express');
const app = express();

//2 seteamos urlencoded para capturar datos del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//3 invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

//4 el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//5 establecemos motor de plantillas ejs
app.set('view engine', 'ejs');

//6 invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

//7 var de session

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

console.log(__dirname);
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(3000, (req, res) => {
    console.log("Server running in http://localhost:3000");

})