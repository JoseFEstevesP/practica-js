/** @format */

const lista = document.getElementById('lista');
const liTemplete = document.getElementById('liTemplete');
const fragment = document.createDocumentFragment();
const cartBtn = document.querySelectorAll('.card__btn');
const carritoObjeto = {};
const addToCart = e => {
	const productos = {
		titulo: e.target.dataset.fruta,
		id: e.target.dataset.fruta,
		cantidad: 1,
	};
	if (carritoObjeto.hasOwnProperty(productos.titulo)) {
		productos.cantidad = carritoObjeto[productos.titulo].cantidad + 1;
	}
	carritoObjeto[productos.titulo] = productos;
	pintarCarrito();
};
const pintarCarrito = () => {
	lista.textContent = '';
	Object.values(carritoObjeto).forEach(item => {
		const clone = liTemplete.content.firstElementChild.cloneNode(true);
		clone.querySelector('.liProduct__product').textContent = item.titulo;
		clone.querySelector('.liProduct__amount').textContent = item.cantidad;
		fragment.appendChild(clone);
	});
	lista.appendChild(fragment);
};
cartBtn.forEach(btn => btn.addEventListener('click', addToCart));
