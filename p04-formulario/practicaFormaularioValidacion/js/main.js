/** @format */

const form = document.getElementById('form');
const contentInputUser = document.getElementById('contentInputUser');
const contentInputEmail = document.getElementById('contentInputEmail');
const formMsgUser = document.getElementById('formMsgUser');
const submit = document.getElementById('submit');
const formMsgEmail = document.getElementById('formMsgEmail');
const validacion = {
	UserName: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
	UserEmail:
		/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
};

form.addEventListener('submit', e => {
	e.preventDefault();
	const { userName, userEmail } = e.target;
	functionValidacion(
		validacion.UserName,
		userName.value,
		contentInputUser,
		formMsgUser
	);
	functionValidacion(
		validacion.UserEmail,
		userEmail.value,
		contentInputEmail,
		formMsgEmail
	);
	if (
		validacion.UserName.test(userName.value) &&
		validacion.UserEmail.test(userEmail.value)
	) {
		submit.classList.add('form__content--submit--show');
	} else {
		submit.classList.remove('form__content--submit--show');
	}
});
const functionValidacion = (
	exprecion,
	valorAValidar,
	contentInputs,
	formMsg
) => {
	if (exprecion.test(valorAValidar)) {
		contentInputs.classList.remove('form__content--iconErr');
		contentInputs.classList.add('form__content--iconCheck');
		formMsgEmail.classList.remove('form__msg--show');
	} else {
		contentInputs.classList.remove('form__content--iconCheck');
		contentInputs.classList.add('form__content--iconErr');
		formMsg.classList.add('form__msg--show');
	}
};
