// importar de manera de node etc...
// const matematicaas = require('./fuction')
// desescricturando el import
const {sumar, resta, multiplica,divicion} = require('./fuction')

console.log(sumar(5,5));
console.log(resta(5,3));
console.log(multiplica(5,5))
console.log(divicion(5,5));
// si agregamos en el packge.json el metodo 
// "type" podemos escoger entre "commonjs" y "module",
//  con commonjs es la manera por defecto de node 
// con el module.export y para inportar el require()
//  y con el module es de la manera de export y import 
