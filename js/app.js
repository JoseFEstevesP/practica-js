const form = document.getElementById('form');
const contentEstudiantes = document.getElementById(
	'contentEstudiantes'
);
const contentProfesores = document.getElementById(
	'contentProfesores'
);
const templateEstudiantes = document.getElementById(
	'templateEstudiantes'
).content;
const templateProfesores = document.getElementById(
	'templateProfesores'
).content;
const estudiantes = [];
const profesores = [];
document.addEventListener('click', e => {
	if (e.target.dataset.nombre) {
		if (e.target.matches('.btn--aprobar')) {
			estudiantes.map(item => {
				if (item.nombre === e.target.dataset.nombre) {
					item.setEstado = true;
				}
				return item;
			});
		}
		if (e.target.matches('.btn--reprobar')) {
			estudiantes.map(item => {
				if (item.nombre === e.target.dataset.nombre) {
					item.setEstado = false;
				}
				return item;
			});
		}
		Persona.pintarPersonaUI(estudiantes, 'estudiante');
	}
});
form.addEventListener('submit', e => {
	e.preventDefault();
	const datos = new FormData(form);
	const [nombre, edad, opsiones] = [...datos.values()];
	if (opsiones === 'estudiante') {
		const estudiante = new Estudiante(nombre, edad);
		estudiantes.push(estudiante);
		Persona.pintarPersonaUI(estudiantes, opsiones);
	}
	if (opsiones === 'profesor') {
		const profesor = new Profesor(nombre, edad);
		profesores.push(profesor);
		Persona.pintarPersonaUI(profesores, opsiones);
	}
});
class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	static pintarPersonaUI(persona, tipo) {
		if (tipo === 'estudiante') {
			contentEstudiantes.textContent = '';
			const fragment = document.createDocumentFragment();
			persona.forEach(item => {
				fragment.appendChild(item.agregarNuevoEstudiante());
			});
			contentEstudiantes.appendChild(fragment);
		}
		if (tipo === 'profesor') {
			contentProfesores.textContent = '';
			const fragment = document.createDocumentFragment();
			persona.forEach(item => {
				fragment.appendChild(item.agregarNuevoProfesor());
			});
			contentProfesores.appendChild(fragment);
		}
	}
}
class Estudiante extends Persona {
	#estado = false;
	#estudiante = 'Estuduante';
	set setEstado(estado) {
		this.#estado = estado;
	}
	get getEstudiante() {
		return this.#estudiante;
	}
	agregarNuevoEstudiante() {
		const clone = templateEstudiantes.cloneNode(true);
		clone.querySelector('.students__title').textContent = this.nombre;
		clone.querySelector('.students__textEs').textContent =
			this.getEstudiante;
		clone.querySelector('.students__edad').textContent = this.edad;
		if (this.#estado) {
			clone
				.querySelector('.students__condition')
				.classList.add('students__condition--aprobado');

			clone.querySelector('.btn--aprobar').disabled = true;
			clone
				.querySelector('.btn--aprobar')
				.classList.add('btn--disabledAprobado');
			clone.querySelector('.btn--reprobar').disabled = false;
		} else {
			clone
				.querySelector('.students__condition')
				.classList.remove('students__condition--aprobado');
			clone.querySelector('.btn--reprobar').disabled = true;
			clone
				.querySelector('.btn--reprobar')
				.classList.add('btn--disabledReprobado');

			clone.querySelector('.btn--aprobar').disabled = false;
		}
		clone.querySelector('.students__condition').textContent = this
			.#estado
			? 'Aprobado'
			: 'Reprobado';
		clone.querySelector('.btn--aprobar').dataset.nombre = this.nombre;
		clone.querySelector('.btn--reprobar').dataset.nombre =
			this.nombre;
		return clone;
	}
}
class Profesor extends Persona {
	#profesor = 'Profesor';
	agregarNuevoProfesor() {
		const clone = templateProfesores.cloneNode(true);
		clone.querySelector('.teachers__title').textContent = this.nombre;
		clone.querySelector('.teachers__text').textContent =
			this.#profesor;
		clone.querySelector('.teachers__years').textContent = this.edad;
		return clone;
	}
}
