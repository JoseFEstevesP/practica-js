/** @format */

const lista = document.getElementById('lista');
const liTemplete = document.getElementById('liTemplete');
const listaFooter = document.getElementById('listaFooter');
const TotalPrecio = document.getElementById('TotalPrecio');
const fragment = document.createDocumentFragment();
let carritoArray = [];
const addToCart = e => {
	const productos = {
		titulo: e.target.dataset.fruta,
		id: e.target.dataset.fruta,
		cantidad: 1,
		precio: parseInt(e.target.dataset.precio),
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
		const clone = liTemplete.content.cloneNode(true);
		clone.querySelector('.liProduct__product').textContent = item.titulo;
		clone.querySelector('.liProduct__amount').textContent = item.cantidad;
		clone.querySelector('.liProduct__precio').textContent =
			item.precio * item.cantidad;
		clone.querySelector('.liProduct__btn--add').dataset.id = item.id;
		clone.querySelector('.liProduct__btn--delite').dataset.id = item.id;
		fragment.appendChild(clone);
	});
	lista.appendChild(fragment);
	pintarFooter();
};
const pintarFooter = () => {
	listaFooter.textContent = '';
	const total = carritoArray.reduce(
		(acc, current) => acc + current.precio * current.cantidad,
		0
	);
	const clone = TotalPrecio.content.cloneNode(true);
	clone.querySelector('.footerTotal__precio').textContent = total;
	listaFooter.appendChild(clone);
};
const btnAumentar = e => {
	carritoArray.map(item => {
		if (item.id === e.target.dataset.id) {
			item.cantidad++;
		}
		return item;
	});
	pintarCarrito();
};
const btnDisminuir = e => {
	carritoArray.filter(item => {
		if (item.id === e.target.dataset.id) {
			if (item.cantidad > 0) {
				item.cantidad--;
				console.log(item.cantidad === 0);
				console.log(item.cantidad);
				console.log(item);
				if (item.cantidad === 0) return;
				return item;
			}
		} else {
			return item;
		}
	});
	pintarCarrito();
};
document.body.addEventListener('click', e => {
	if (e.target.classList.contains('card__btn')) {
		addToCart(e);
	}
	if (e.target.classList.contains('liProduct__btn--add')) {
		btnAumentar(e);
	}
	if (e.target.classList.contains('liProduct__btn--delite')) {
		btnDisminuir(e);
	}
});
