/** @format */

const form = document.getElementById('form');
const validacion = {
	UserName: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
	UserEmail:
		/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
};

form.addEventListener('submit', e => {
	e.preventDefault();
	const { userName, userEmail } = e.target;
	const contentInputs = e.target.firstElementChild
	functionValidacion(
		validacion.UserName,
		userName.value,
		contentInputs,
		contentInputs.lastElementChild
	);
	functionValidacion(
		validacion.UserEmail,
		userEmail.value,
		contentInputs.nextElementSibling,
		contentInputs.nextElementSibling.lastElementChild
	);
	if (
		validacion.UserName.test(userName.value) &&
		validacion.UserEmail.test(userEmail.value)
	) {
		e.target.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('form__content--submit--show');
	} else {
		e.target.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('form__content--submit--show');
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
