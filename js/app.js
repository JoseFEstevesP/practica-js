// esto es una fucntion constructora
function Persona(nombre) {
	this.nombre = nombre;
	this.saludar = function () {
		return this.nombre + ' dice hola';
	};
	/* de esta manera al instanciar 
    el contructor la funcion saludarIngles
    se le estara agragando a todas las 
    instancioas, esto no es efectiva la mejor 
    manera es pasandolo como protopio.
    un prototipo es un mecanismo en el cual los
    objetos en js heredan caracteristicas entre si
    EJ. en la consola del navegador si creamos un
    array veremos q al momento de llamarlo podemos 
    var sus diferentes metodos.
    js es un lenguaje de prototipos el cual si 
    no encuentra un metodo el sube un escalon y lo 
    busca y si lo encuentra lo envia 
  */
	// this.saludarIngles = function () {
	// 	return this.nombre + 'says hi!';
	// };
}
Persona.prototype.saludarIngles = function () {
	return this.nombre + ' says hi!';
};
// new es para instancion un objetos
const juanito = new Persona('juanito');
const pedrito = new Persona('pedrito');
console.log(juanito, juanito.nombre, juanito.saludar());
console.log(pedrito, pedrito.nombre, pedrito.saludarIngles());
/* como se puede ver al llamar la instancia se puede 
observar q la function saludaringles se le agrega a 
todas las instancio (si tubieramos 1000 estancia y 
esa funcion no sele va agregar a todas la instancio 
seria agregar codigo innecesario), agregandolo a los 
prototpos es codigo sera mas eficiente y no se 
cargara codigo q no se usara */
