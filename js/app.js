// localStorage.setItem(clave, valor), el localStorege resive solo estrig
localStorage.setItem('platano', '🍌'); // para añadir
const platano = localStorage.getItem('platano'); //para extraer la información y mosttrarla
console.log(platano);
localStorage.removeItem('platano'); //para eliminar la información de localStorage
// localStorage.clear(); // para destruir por completo la info de localStorage
