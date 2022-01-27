import posts from '../main.js'
// // un callback es una funcion q se le pasa otra funcion como parametro
const findPostById = (id, callback) => {
	const post = posts.find(item => item.id === id);

	if (post) {
		callback(null, post); // null -> es el error q se retorna, si no hay error se retorna el post
	} else {
		callback('no se encuenta el id ' + id); //-> este es el error
	}
};
findPostById(4, (err, post) => {
	if (err) {
		return console.log(err); // si viene un error desde la funcion mostrara el error y termina el ciclo, si no se muestra el posts
	}
	console.log(post);
});

// ejemplo de llamar un callback anidado (el infierno de los callback)
// const findPostById = (id, callback) => {
// 	const post = posts.find(item => item.id === id);

// 	if (post) {
// 		callback(null, post);
// 	} else {
// 		callback('no se encuenta el id ' + id);
// 	}
// };
// findPostById(1, (err, post) => {
// 	if (err) return console.log(err);
// 	console.log(post);
// 	findPostById(2, (err, post) => {
// 		if (err) return console.log(err);
// 		console.log(post);
// 		findPostById(3, (err, post) => {
// 			if (err) return console.log(err);
// 			console.log(post);
// 			findPostById(4, (err, post) => {
// 				if (err) return console.log(err);
// 				console.log(post);
// 			});
// 		});0
// 	});
// });
