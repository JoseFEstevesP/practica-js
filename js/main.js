// crea elementos y los inserta en el orden que ves llega
// const lista = document.getElementById('lista');
// const arrayPaises = ['Venezuela', 'España', 'Colombia', 'argentina'];
// const fragment = document.createDocumentFragment()
// arrayPaises.forEach(pais => {
// 	const li = document.createElement('li');
// 	li.textContent = pais;
// 	fragment.appendChild(li);
// });
// lista.appendChild(fragment)
// =================================================
// crea elementos y los inserta en el orden inverso
// const lista = document.getElementById('lista');
// const arrayPaises = ['Venezuela', 'España', 'Colombia', 'argentina'];
// const fragment = document.createDocumentFragment();
// arrayPaises.forEach(pais => {
// 	const newNode = document.createElement('li');
// 	newNode.textContent = pais;
// 	const referenceNode = fragment.firstChild;
// 	fragment.insertBefore(newNode, referenceNode);
// });
// lista.appendChild(fragment);
// practica de createElement
const lista = document.getElementById('lista');
const arrayPaises = ['Venezuela', 'España', 'Colombia', 'argentina'];
const fragment = document.createDocumentFragment();
arrayPaises.forEach(pais => {
	const li = document.createElement('li');
	li.className = 'list';
	const bold = document.createElement('b');
	bold.textContent = 'País: ';
	const span = document.createElement('span');
	span.className = 'text-primary';
	span.textContent = `${pais}.`;
	li.appendChild(bold);
	li.appendChild(span);
	fragment.appendChild(li);
});
lista.appendChild(fragment);
