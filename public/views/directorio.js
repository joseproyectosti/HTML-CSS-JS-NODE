//Este archivo es para generar la ruta donde se encuentran los archivos html, una vez generada se exporta al archivo donde se implementan las rutas

const path = require('path');
const dirpath = path.join(__dirname, '');

module.exports = dirpath;