const frutas = [
	{ nombre: '🍌', color: 'amarillo' },
	{ nombre: '🍓', color: 'rojo' },
	{ nombre: '🍏', color: 'verde' },
];
// para indroducir un array en el local storage hay q formatearlo (transormalo) y eso se logra con JSON.stringify()
localStorage.setItem('frutas', JSON.stringify(frutas));
// para optener su valor y inprimirlo se tiene q parcear con JSON.parse()
const frutasDesdeLocal = JSON.parse(localStorage.getItem('frutas'));
console.log(frutasDesdeLocal);
