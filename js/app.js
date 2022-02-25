const form = document.getElementById('form');
const tItem = document.getElementById('tItem').content;
const contentList = document.getElementById('contentList');
const msg = document.querySelector('.msg');
let todos = [];
form.addEventListener('submit', e => {
	e.preventDefault();
	const { todo } = e.target;
	msg.classList.remove('msg--show');
	if (!todo.value.trim()) {
		msg.classList.add('msg--show');
		return;
	}
	agregrTarea(todo.value);
	pintarTodo();
});
const agregrTarea = todo => {
	const todoObjet = {
		nombre: todo,
		id: `${Date.now()}`,
	};
	todos.push(todoObjet);
};
const pintarTodo = () => {
	contentList.textContent = '';
	const fragment = document.createDocumentFragment();
	todos.forEach(item => {
		const clone = tItem.cloneNode(true);
		clone.querySelector('.item__text').textContent = item.nombre;
		clone.querySelector('.item__btn').dataset.id = item.id;
		fragment.appendChild(clone);
	});
	contentList.appendChild(fragment);
	localStorage.setItem('todos', JSON.stringify(todos));
};
document.addEventListener('click', e => {
	if (e.target.classList.contains('item__btn')) {
		todos = todos.filter(item => item.id !== e.target.dataset.id);
		pintarTodo();
	}
});
document.addEventListener('DOMContentLoaded', e => {
	if (localStorage.getItem('todos')) {
		todos = JSON.parse(localStorage.getItem('todos'));
		pintarTodo();
	}
});
