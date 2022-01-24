/** @format */

const form = document.getElementById('form');
const contentInputUser = document.getElementById('contentInputUser');
const contentInputEmail = document.getElementById('contentInputEmail');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const formMsgUser = document.getElementById('formMsgUser');
const submit = document.getElementById('submit');
const formMsgEmail = document.getElementById('formMsgEmail');
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail =
	/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

form.addEventListener('submit', e => {
	if (regUserName.test(userName.value)) {
		contentInputUser.classList.remove('form__content--iconErr');
		contentInputUser.classList.add('form__content--iconCheck');
		formMsgUser.classList.remove('form__msg--show');
	} else {
		contentInputUser.classList.remove('form__content--iconCheck');
		contentInputUser.classList.add('form__content--iconErr');
		formMsgUser.classList.add('form__msg--show');
	}
	if (regUserEmail.test(userEmail.value)) {
		contentInputEmail.classList.remove('form__content--iconErr');
		contentInputEmail.classList.add('form__content--iconCheck');
		formMsgEmail.classList.remove('form__msg--show');
	} else {
		contentInputEmail.classList.remove('form__content--iconCheck');
		contentInputEmail.classList.add('form__content--iconErr');
		formMsgEmail.classList.add('form__msg--show');
	}
	if (regUserName.test(userName.value) && regUserEmail.test(userEmail.value)) {
		submit.classList.add('form__content--submit--show');
	}else{
		submit.classList.remove('form__content--submit--show');
	}
	e.preventDefault();
});
