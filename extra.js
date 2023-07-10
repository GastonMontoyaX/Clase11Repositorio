let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [valor0, , valor2, , valor4, ...restoNumeros] = numeros;

let mascota = {
    nombre: "Bony",
    tipo: "Perro",
    color: "Dorado",
    raza: "Golden Retriever"
  };
let { nombre, tipo, color, raza } = mascota;

console.log("Valor en la posición 0:", valor0);
console.log("Valor en la posición 2:", valor2);
console.log("Valor en la posición 4:", valor4);
console.log("Resto de los números:", restoNumeros);
console.log("Nombre de la mascota:", nombre);
console.log("Tipo de mascota:", tipo);
console.log("Color de la mascota:", color);
console.log("Raza de la mascota:", raza);
console.log(`Hola, les presento a mi mascota. Su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);