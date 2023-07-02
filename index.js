//Video de Fazt llamado "Primera página web con node"


const express = require('express');
const app = express();
const path = require('path');


//Settings
app.set('port', 1337);

//app.set('views', path.join(__dirname, 'views'));

//middlewares


//routes
app.use(require('./routes/index'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));



//Listening the server
app.listen(app.get('port'), function () {
    console.log('Servidor activo en el puerto', app.get('port'));
});




//&& = == != >= <= \r\n % += || ¿