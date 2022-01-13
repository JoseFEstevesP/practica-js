/** @format */

//====== ejemplo 1 con el map()
// const frutas = ['🍌','🍏','🍓']
// const nuevoArray = frutas.map(fruta => fruta)
// console.log(nuevoArray);
//====== ejemplo 2 con el map()
// const users = [
// {name: "john", age: 34},
// {name: "amy", age: 20},
// {name: "camperCat", age:10}
// ]
// const names = users.map(user => user.name)
// console.log(names);
//====== ejemplo 3 con el map()
// const numenros = [1,2,3,4,5,6,7,8,9,10]
// const numenrosPorDos = numenros.map(num => num * 2)
// console.log(numenrosPorDos);
//====== ejemplo 1 con el filter()
// const users = [
// { uid: 1, name: "John", age: 34 },
// { uid: 2, name: "jose", age: 30 },
// { uid: 3, name: "Amy", age: 20 },
// { uid: 4, name: "camperCat", age: 10 },
// ];
// const mayores = users.filter(use => use.age >= 30)
// console.log(mayores);
//====== ejemplo 2 con el filter() para eliminar y obtener un nuevo array con el user eliminado
// const users = [
// 	{ uid: 1, name: "John", age: 34 },
// 	{ uid: 2, name: "Amy", age: 20 },
// 	{ uid: 3, name: "camperCat", age: 10 },
// ];
// const usuariosFiltrados = users.filter(use => use.uid !== 3)
// console.log(usuariosFiltrados);
//====== ejemplo 1 con el find() devuelve el primer elmento encontrado
// const users = [
// 	{ uid: 1, name: 'John', age: 34 },
// 	{ uid: 2, name: 'Amy', age: 20 },
// 	{ uid: 3, name: 'camperCat', age: 10 },
// ];
// const amy = users.find(user => user.uid === 2)
// console.log(amy);
//====== con el find() se puede usar la destruturación para tener elemento concretos
// const {age} = users.find(user => user.uid === 2)
// console.log(age);
//====== si se le pone un dato q no existe en el array lanzara un error
// const {name} = users.find(user => user.uid === 4)
// console.log(age);
//====== para saver si lo q se esta buscando con el find existe o no se usa some() q debuelve un true o false si un elemento del array coincide
// const existe = users.some(use => use.uid === 4)
// console.log(existe);
//===== otro metode para buscar es el findIndex(), debuelve el primer elemento q coincida con lo buscado en caso de no encontrar devuelve -1
// let indice = users.findIndex(use => use.uid === 2)
// console.log(indice);
// console.log(users[indice]);
// indice = users.findIndex(use => use.uid === 4)
// console.log(indice);
//========== se puede realizar una condicional q me indiq si el uid existe o no
//========== el metodo slice devuelve una parte del  array dentro de un nuevo array  empezando delsde el inicio hasta el final (fin no incluido), el array original no es modificado
// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3
// const arrNuevo = arr.slice(1,3)
// console.log(arrNuevo);
//========= El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2)
// console.log(array3);
//======= existe otra manera que es con el spread opereitor, permite a una elemento iterable tal como un arreglo o cadena ser expandico en lugare donde son esperados
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = [...array1, '-', ...array2]
// console.log(array3);
//======= El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
// const numenros = [1, 2, 3, 4, 5];
// const sumarTodos = numenros.reduce((acc, valoractual) => acc + valoractual);
// console.log(sumarTodos);
// ============ Aplanar matrices anidadas #01:
// esto sirve pra linpiar el array en el ejemplo hay un array q contiene a mas array para dejarlo plano en uno solo se puede usar el reduce
// const arrayNumeros = [
// 	[0, 1],
// 	[2, 3],
// 	[4, 5],
// ];
//===== aq podemos ver varios ejemplao con el mismo resultado para aplanar el array
// const soloNumeros= arrayNumeros.reduce((acc, current)=> acc.concat(current))
// console.log(soloNumeros);
// ============ Aplanar matrices anidadas #02:
// const arrayPlano = [].concat(...arrayNumeros)
// console.log(arrayPlano)
// ============ Aplanar matrices anidadas #03:
// el metodo flat es uan opcion experimental
// const arrayPlano = arrayNumeros.flat()
// console.log(arrayPlano)
// const arrayNumeros = [1, 2, [3, 4, ]];
// const arrayNumeros = [1, 2, [3, 4, [5, 6]]];
// const arrayPlano = arrayNumeros.flat(2)
// console.log(arrayPlano)
//========== El método split() divide un objeto de tipo String en un array, mediante un separador.
// const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
// const arrayMeses =cadenaMeses.split(',')
//  console.log(arrayMeses)
//======= el método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
// Separador: Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (",")
//  const nuevoTexto = arrayMeses.join('-')
//  console.log(nuevoTexto)