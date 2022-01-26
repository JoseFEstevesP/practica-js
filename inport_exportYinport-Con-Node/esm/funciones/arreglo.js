
// en el video sale q siempre tiene q tener una
// export default que sera la cabecera de la
// ixportación, prove a exportarlo sin el
//  export default y funcion de iual manera
// export default function sumar(a, b) {
// 	return a + b;
// }
export function sumar(a, b) {
	return a + b;
}
export function resta(a, b) {
	return a - b;
}
export function multiplica(a, b) {
	return a * b;
}
export function divicion(a, b) {
	return a % b;
}
// por default se exporta solo 1 funcion o variavles qsera la de referencia
// export default sumar; //esta es la primera manera
// para exportar las demas funciones su puede exportar mediante un objeto
// export {resta,multiplica,divicion}
