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
  static probandoSaludo(nombre){
    return nombre + ' dice hola'
  }
}
console.log(Persona.probandoSaludo('victoria')
);
const userName = new Persona('ale');
userName.setNombre = 'jose'
console.log(userName.getNombre)
console.log(userName.saludar())
