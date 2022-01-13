/** @format */

const lista = document.getElementById('lista');
const liTemplete = document.getElementById('liTemplete');
const fragment = document.createDocumentFragment();
const cartBtn = document.querySelectorAll('.card__btn');
const carritoArray = [];
const addToCart = e => {
	const productos = {
		titulo: e.target.dataset.fruta,
		id: e.target.dataset.fruta,
		cantidad: 1,
	};
	const index = carritoArray.findIndex(i => i.id === productos.id);
	if (index === -1) {
		carritoArray.push(productos);
	} else {
		carritoArray[index].cantidad++;
	}
	pintarCarrito();
};
const pintarCarrito = () => {
	lista.textContent = '';
	carritoArray.forEach(item => {
		const clone = liTemplete.content.firstElementChild.cloneNode(true);
		clone.querySelector('.liProduct__product').textContent = item.titulo;
		clone.querySelector('.liProduct__amount').textContent = item.cantidad;
		fragment.appendChild(clone);
	});
	lista.appendChild(fragment);
};
cartBtn.forEach(btn => btn.addEventListener('click', addToCart));
