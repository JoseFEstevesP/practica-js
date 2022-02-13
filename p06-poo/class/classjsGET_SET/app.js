// de la manera correcta por q se le deve de llamar es de esta manera, tenemos q crear el geter y el seter con las palabras reservada get y set dentro del contructiror
class Persona {
	constructor(nombre) {
		this.nombre = nombre;
	}
  get getNombre(){
    return this.nombre;
  }
  set setNombre(nombre){
    this.nombre = nombre;
  }
	saludar() {
		return this.nombre + ' dice hola';
	}
}
const userName = new Persona('ale');
userName.setNombre = 'jose'
console.log(userName.getNombre)
console.log(userName.saludar())
