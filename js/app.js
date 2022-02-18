document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});

const fetchData = async (
	url = 'https://rickandmortyapi.com/api/character'
) => {
	try {
		loadindData(true);
		const res = await fetch(url);
		const data = await res.json();
		pintarCard(data);
	} catch (error) {
		console.log(error);
	} finally {
		loadindData(false);
	}
};
const pintarCard = data => {
	const contentCard = document.getElementById('contentCard');
	contentCard.textContent = '';
	const cardT = document.getElementById('cardT').content;
	const fragment = document.createDocumentFragment();
	data.results.forEach(iten => {
		const clone = cardT.cloneNode(true);
		let img = clone.querySelector('.card__img');
		clone.querySelector('.card__titleCard').textContent = iten.name;
		img.setAttribute('src', iten.image);
		img.setAttribute('alt', `imagen de ${iten.name}`);
		clone.querySelector('.card__subTitelCard').textContent =
			iten.species;
		fragment.appendChild(clone);
	});
	contentCard.appendChild(fragment);
	pintarPaginacion(data.info);
};
const pintarPaginacion = data => {
	const btnsPrNe = document.getElementById('btnsPrNe');
	btnsPrNe.textContent = '';
	const btnT = document.getElementById('btnT').content;
	const clone = btnT.cloneNode(true);
	if (data.prev) {
		clone.getElementById('prev').classList.add('btn--show');
	} else {
		clone.getElementById('prev').classList.remove('btn--show');
	}
	if (data.next) {
		clone.getElementById('next').classList.add('btn--show');
	} else {
		clone.getElementById('next').classList.remove('btn--show');
	}
	btnsPrNe.appendChild(clone);
	document
		.getElementById('next')
		.addEventListener('click', () => fetchData(data.next));
	document
		.getElementById('prev')
		.addEventListener('click', () => fetchData(data.prev));
};
const loadindData = estado => {
	const loan = document.getElementById('loan');
	if (estado) {
		loan.classList.add('loan--show');
	} else {
		loan.classList.remove('loan--show');
	}
};
