const url = 'https://jsonplaceholder.typicode.com/posts/';
// de esta manera consumimos con fetch una "api" y la mostramos
// fetch(url)
// 	.then(respuesta => respuesta.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))
// 	.finally(() => console.log('Finalizó'));
// con el async y el await
const findPostById = async id => {
	try {
		const respuesta = await fetch(url + id); //el fetch con la url es obligatoria pora consumir la api o la inforamcion
		const post = await respuesta.json();
		console.log(post);
	} catch (error) {
		console.log(error);
	}
};
findPostById(10);
