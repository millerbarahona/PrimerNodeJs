const express = require('express');
const app = express();
const path = require('path');
// settings
app.set ('port',3000); 
app.set ('views',path.join(__dirname, 'views') );
app.engine('html', require('ejs').renderFile);
app.set ('view engine', 'ejs');
//middleares


//routes
//----- forma de rutas en un solo archivo: 
//cuando se pide algo de la ruta inical del servidor
//app.get('/', (req, res) => {
//    res.render('index', {title: 'Primer webSite'}); // le mada una variable llamada title al html
//
//});

// rutas en distintos archivos
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public'))); //archivos ue el navegador pueda pedir 
//listening to server
app.listen(app.get('port'), () => {
    console.log('server in port ',app.get('port'));
});

