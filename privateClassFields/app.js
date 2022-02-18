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
	#notas = [];//<- de esta manera ese declara las propiedaddes privadas
	set setNotas(nota) {
		this.#notas.push(nota);
	}
	get getNotas() {
		return this.#notas;
	}
}
const userName = new Estudiantes('ale', 21);
userName.setNotas = 2
userName.setNotas = 5
userName.setNotas = 10
console.log(userName.getNotas);
console.log(userName);
// console.log(userName.#notas);//<- de esta manera da error ya que no se puede pintar de esta manera las propiedades privadas
