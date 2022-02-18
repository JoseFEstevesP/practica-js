/** @format */
// para elementos estaticos
// const lista = document.getElementById('lista');
// const arrayPaises = ['Venezuela', 'España', 'Colombia', 'argentina'];
// const liTemplate = document.getElementById('liTemplate');
// const fragme = document.createDocumentFragment();
// arrayPaises.forEach(pais => {
// 	const clone = liTemplate.content.cloneNode(true);
// 	clone.querySelector('.text-primary').textContent = pais;
// 	fragme.appendChild(clone);
// });
// lista.appendChild(fragme);
// para elementos q reierean un eventos (click...)
const lista = document.getElementById('lista');
const arrayPaises = ['Venezuela', 'España', 'Colombia', 'argentina'];
const liTemplate = document.getElementById('liTemplate');
const fragme = document.createDocumentFragment();
const clickElement = () => console.log('diste click');
arrayPaises.forEach(pais => {
	const clone = liTemplate.content.firstElementChild.cloneNode(true);
	clone.querySelector('.text-primary').textContent = pais;
	clone.addEventListener('click', clickElement);
	fragme.appendChild(clone);
});
lista.appendChild(fragme);
// arrayPaises.forEach(pais => {
// 	const clone = liTemplate.content.firstElementChild.cloneNode(true);
// 	clone.querySelector('.text-primary').textContent = pais;
// 	clone.addEventListener('click', () => console.log(`diste click ${pais}`));
// 	fragme.appendChild(clone);
// });
// lista.appendChild(fragme);
