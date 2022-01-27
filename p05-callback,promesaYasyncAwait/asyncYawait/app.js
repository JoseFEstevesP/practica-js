/** @format */

import posts from '../main.js';
const findPostById = id =>
	new Promise((resolve, reject) => {
		setTimeout(() => {// esto es para simular el retraso q hay al traer la información de una BD
			const post = posts.find(item => item.id === id);
			if (post) {
				resolve(post);
			} else {
				reject('no se encuenta el id ' + id);
			}
		}, 2000);
	});
// findPostById(1)
// 	.then(post => {
// 		console.log(post);
// 	})
// 	.catch(err => console.log(err));
// para q el async y el await funcione se tien q trabajar con una promesa
// async > puede trabar solo, eso debuelve una fucntion asyncrona
// await > para q funcione tien q estar dentro deuna fucntion asyncrona 
// const buscar = async (id) =>{
// const post = await findPostById(id)
// console.log(post);
// }
// para el manejor mas comono y para manejar los errores se uns el try{}catch(error){}
// con el try le decimos q ejecute lo q tiene dentro esperando la promesa y si resive el error se usa el chtch para pintar el error
// con el finally el codigo se ejecuta si o si no importa si da error o no 
// const buscar = async (id) =>{
//   try {
//     const post = await findPostById(id)
//     console.log(post);  
//   } catch (error) {
//     console.log(error);
//   }finally{
//     console.log('se ejecuta si o si');
//   }
  
//   }
// buscar(4)
const buscar = async () =>{
  try {
const resPosts = await Promise.all([
  findPostById(4),
  findPostById(2)
])// es un a optimizacion del codigo cada vez q se necesite haycer una promis q no dependa se pude usar el Promise.all
// si hay uno q falla el resto de peticiones no se ejecutara  
console.log(resPosts);
    // de esta manera es si depende de otra BD 
    // const postUno = await findPostById(1)
    // const postDos = await findPostById(2)
    // console.log(postUno.title,postDos.title);  
  } catch (error) {
    console.log(error);
  }finally{
    console.log('se ejecuta si o si');
  }
  
  }
buscar()
// con las promesas nuestro codigo es asyncorno se estara ejecutando de foram paralela a nuesto codigo 
  console.log('fin del codigo');