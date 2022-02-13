class Persona {
	constructor(nombre) {
		this.nombre = nombre;
	}
	saludar() {
		return this.nombre + ' dice hola';
	}
}
// en javascript es mas flexible el tema de las class en la POO de otros lenguajes se ve mala practica hacer lo q se izo en este ejemplo (a)
const userName = new Persona('jose');
userName.nombre = "ale"// <-- a
console.log(userName.nombre);// <-- a
console.log(userName.saludar());