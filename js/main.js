const list = document.getElementById('lista');
const templeteLi = document.getElementById('liTemplete').content;
const fragment = document.createDocumentFragment();
const cartObjet = {};
const addToCart = e => {
	const product = {
		title: e.target.dataset.fruta,
		amount: 1,
	};
	if (cartObjet.hasOwnProperty(product.title)) {
		product.amount = cartObjet[product.title].amount + 1;
	}
	cartObjet[product.title] = product;
	printCart();
};
const printCart = () => {
	list.textContent = '';
	Object.values(cartObjet).forEach(item => {
		const clone = templeteLi.firstElementChild.cloneNode(true);
		clone.querySelector('.liProduct__product').textContent =
			item.title;
		clone.querySelector('.liProduct__amount').textContent =
			item.amount;
		fragment.appendChild(clone);
	});
	list.appendChild(fragment);
};
document.body.addEventListener('click', e => {
	if (e.target.classList.contains('card__btn')) {
		addToCart(e);
	}
});
