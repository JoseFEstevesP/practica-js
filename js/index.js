const frutas = [];
const fruta = prompt('que fruta decesa comprar');
frutas.push(fruta);
while (confirm('deseas agregar mas futas')) {
	const fruta = prompt('que fruta decesa comprar');
	frutas.push(fruta);
}
console.log(`carrito de compre:
Tienes ${frutas.length} productos`);
for (const carrito of frutas) {
	console.log(carrito);
}
