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
	// se les puede dar un valor por defecto a las propiedades
	constructor(nombre, edda, notas = []) {
		super(nombre, edda); // <-- super es para indicar q las propiedades del padre se mantendran
		this.notas = notas;
	}
	set setNotas(nota) {
		this.notas.push(nota);
	}
	get getNotas() {
		return this.notas;
	}
	// sobrescribir algo q ya esta definido en su clase pardre se le denomina como polimorfismo
	saludar() {
		return `${this.nombre} dice hola desde estudiantes`;
	}
}
const userName = new Estudiantes('ale', 21);
userName.setNotas = 10;
userName.setNotas = 5;
userName.setNotas = 15;

console.log(userName.getNotas);
