const express = require('express');
//const { dirname } = require('path');
const router = express.Router();
const path = require('path');
const dirpath = require('../public/views/directorio');


router.get('/', function (request, response) {
    response.sendFile(path.join(dirpath, 'index.html'));
    //response.render('views/index.html');
});
router.get('/agua', function (request, response) {
    response.sendFile(path.join(dirpath, 'agua.html'));
    //response.render('views/Agua.html');
});

router.get('/fuego', function (request, response) {
    response.sendFile(path.join(dirpath, 'fuego.html'));
    //response.render('views/Fuego.html');
});

router.get('/tierra', function (request, response) {
    response.sendFile(path.join(dirpath, 'tierra.html'));
    //response.render('views/Tierra.html');
});

router.get('/aire', function (request, response) {
    response.sendFile(path.join(dirpath, 'aire.html'));
    //response.render('views/Aire.html');
});


module.exports = router;


//&& = == != >= <= \r\n % += || ¿