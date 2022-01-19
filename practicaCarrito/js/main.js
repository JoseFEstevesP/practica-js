// contenedores
const lista = document.getElementById('lista');
const footerCompra = document.getElementById('footerCompra');
// template
const liTemplete = document.getElementById('liTemplete');
const TotalPrecioTemplate = document.getElementById('TotalPrecioTemplate');
// fragment
const fragment = document.createDocumentFragment();

document.body.addEventListener('click', e => {
	if (e.target.classList.contains('card__btn')) {
		agregarAlCarrito(e);
	}
	if (e.target.classList.contains('liProduct__btn--add')) {
		btnAumentar(e);
	}
	if (e.target.classList.contains('liProduct__btn--delite')) {
		btnDisminuir(e);
	}
});
let carritoArray = [];

const agregarAlCarrito = e => {
	const producto = {
		titulo: e.target.dataset.fruta,
		id: e.target.dataset.fruta,
		precio: parseInt(e.target.dataset.precio),
		cantidad: 1
	};
	const index = carritoArray.findIndex(i => i.id === producto.id);
	if (index === -1) {
		carritoArray.push(producto);
	} else {
		carritoArray[index].cantidad++;
	}
	pintarCarrito();
};
const pintarCarrito = () => {
	lista.textContent = '';
	carritoArray.forEach(item => {
		// const clone = liTemplete.content.cloneNode(true); si en el template esta dividida su escructura en diferentes contenedores se qta el firstElementChild 
		const clone = liTemplete.content.firstElementChild.cloneNode(true);
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
	footerCompra.textContent = '';
	const total = carritoArray.reduce(
		(acc, current) => acc + current.precio * current.cantidad,
		0
	);
	const clone = TotalPrecioTemplate.content.cloneNode(true);
	clone.querySelector('.footerTotal__precio').textContent = total;
	if(total !== 0){
		footerCompra.appendChild(clone);
	}
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
	carritoArray = carritoArray.filter(item => {
		if (item.id === e.target.dataset.id) {
			if (item.cantidad > 0) {
				item.cantidad--;
				if (item.cantidad === 0) return;
				return item;
			}
		} else {
			return item;
		}
	});
	pintarCarrito();
};
