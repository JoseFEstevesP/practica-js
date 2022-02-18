import posts from '../main.js'

//para evitar los callback anidados existen las promesas
// una promesa es es un objeto que representa la terminación o el fracaso de una operación asíncrona.
// const findPostById = id => {
// 	const post = posts.find(item => item.id === id);
// 	return new Promise((resolve, reject) => {
// 		// Promise es con la p en mayuscula en minuscula no la toma
// 		//resolve->es la promesa buena y el reject -> es el error
// 		if (post) {
// 			resolve(post);
// 		} else {
// 			reject('no se encuenta el id ' + id);
// 		}
// 	});
// };
// otra manera de escrivir la funcion de las promesas es
const findPostById = id => 
new Promise((resolve,reject)=>{
	const post = posts.find(item => item.id === id);
		if (post) {
			resolve(post);
		} else {
			reject('no se encuenta el id ' + id);
		}
})
// findPostById(4)
// 	.then(post => console.log(post))//muesta la respuesta valida
// 	.catch(err => console.log(err));// muesta el error 
// el infierno de la plromesas 
// retornar la misma funcion para diferentes id
findPostById(1)//con los .then pueden ser pintados todos los q qrramos mientras q con los catch funcion 1 solo, es decir no es necesario pntar cada uno con 1 vasta
	.then(post => {
		console.log(post)
	return findPostById(2)
	})
	.then(post =>{
		console.log(post);
		return findPostById(3)
	})
	.then(post => {
		console.log(post);
		return findPostById(4)
	})
	.catch(err => console.log(err));
