const contentColor = document.getElementById('contentColor');
contentColor.addEventListener('click', e => {
	const viewText = contentColor.querySelector('.viewColor__text');
	const viewBg = contentColor.querySelector('.viewColor__colorBg');
	if (e.target.classList.contains('selectColor__btn')) {
		const valueColor = e.target.previousElementSibling.value;
		viewText.textContent = valueColor;
		viewBg.style.backgroundColor = valueColor;
		navigator.clipboard
			.writeText(valueColor)
			.then(() => console.log('texto copiado'))
			.catch(e => console.log(e));
	}
	e.stopPropagation();
});
