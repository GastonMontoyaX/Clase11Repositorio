const { importar } = require('./collectibles');

const hotToys = importar('figuras1');
const bandai = importar('figuras2');
const starWars = importar('figuras3');

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
  figuras: unifiedCollectibles,
  listFigures() {
    this.figuras.forEach(figura => {
      console.log('Marca: ' + figura.marca);
      console.log('Nombre: ' + figura.nombre);
      console.log('Precio: ' + figura.precio);
      console.log('Stock: ' + figura.stock);
      console.log('------------------------------');
    });
  },
  figuresByBrand(brand) {
    return this.figuras.filter(figura => figura.marca === brand);
  }
};

collectibles.listFigures();

const hotToysFigures = collectibles.figuresByBrand('Hot Toys');
console.log('Figuras de Hot Toys:', hotToysFigures);

const bandaiFigures = collectibles.figuresByBrand('Bandai');
console.log('Figuras de Bandai:', bandaiFigures);

const starWarsFigures = collectibles.figuresByBrand('Star Wars');
console.log('Figuras de Star Wars:', starWarsFigures);