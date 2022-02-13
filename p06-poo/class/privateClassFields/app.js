class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	get getNombre() {
		return this.nombre;
	}
	set setNombre(nombre) {
		this.nombre = nombre;
	}
	saludar() {
		return this.nombre + ' dice hola';
	}
	static probandoSaludo(nombre) {
		return nombre + ' dice hola';
	}
}
class Estudiantes extends Persona {
	constructor(nombre, edda, notas = []) {
		super(nombre, edda); 
		this.notas = notas;
	}
	set setNotas(nota) {
		this.notas.push(nota);
	}
	get getNotas() {
		return this.notas;
	}
	saludar() {
		return `${this.nombre} dice hola desde estudiantes`;
	}
}
const userName = new Estudiantes('ale', 21);

console.log(userName);
