// maneras de delegar eventos es js
const contentp = document.getElementById('contentp');
contentp.addEventListener('click',e=>{
//======= esta es una de las forma detectondo la clace con el contains
// 	if (e.target.classList.contains('content--Bcolor2')) {
// 	console.log('diste click al hijo con el metodo contains');
// }
// ==== mediante su id
if (e.target.id === 'contentp'){
	console.log('diste click al padre mediante su ID');
}
// ==== mediante su matches
if (e.target.matches('.content--Bcolor1')){
	console.log('diste click al hijo mediante matches');
}
// ==== mediante su data-set
if (e.target.dataset['div'] === 'nieto'){
	console.log('diste click al nieto mediante su data-set');
}
})