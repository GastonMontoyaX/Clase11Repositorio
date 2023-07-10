const fs = require('fs');

function importar(marca) {
  const nombreArchivo = marca.toLowerCase() + '.json';
  const nombrePath = './' + nombreArchivo;
  const datos = fs.readFileSync(nombrePath, 'utf8');
  const collectibles = JSON.parse(datos);
  return collectibles;
}
module.exports = { importar };