const form = document.getElementById('form');
// forams para capturar el valor del input
// forma (1) con el id forma tipica q se usa abituel mente
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
// forma (2) con el querySelector
// const userName = document.querySelector('input[name="userName"]')
// const userEmail = document.querySelector('input[name="userEmail"]')
// expreciones
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail =
	/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

form.addEventListener('submit', e => {
	e.preventDefault();
	if (!regUserName.test(userName.value)) {
		console.log('foramto no valido');
		return;
	}
	if (!regUserEmail.test(userEmail.value)) {
		console.log('foramto no valido');
		return;
	}
	console.log('foramto valido');
});
