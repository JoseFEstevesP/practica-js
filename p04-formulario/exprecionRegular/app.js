// exprecion regular 
// const regExp = /jose/i;
// instaciar un ojueto de expecion regular 
// esto es lo mismo q poner esto --> /exprecion/i
// const regExpobjeto = new RegExp('jose', 'i') 
// console.log(regExp.test('jose dawdwdd'));//true
// console.log(regExp.test('jssssose dawdwdd'));//false
// const regExp = /[je]/i;//busca lo q esta entre los corchetes
// console.log(regExp.test(' dffef jgthdthdth  yjyjyje'));//true
// const regExp = /jose|josé/i;//encuentra la exprecion si se escribe de una manera o de otra eso significa la barra
// console.log(regExp.test('josé o jose'));//true, en abas palabras
// const regExp = /[A-Za-z0-9]/i;//solo se acepta letras o numeros
// console.log(regExp.test('josé 122'));//true
// console.log(regExp.test('$$$$'));//false
// const regExp = /^\d+$/gi;// con esta exprecion se acemptan solo numeros
// console.log(regExp.test('jose123'));//false
// console.log(regExp.test('123'));//true
// const regExp = /^[a-zA-Z ]*$/;//con esta exprecion se acemptan solo letras
// console.log(regExp.test('123'));//false
// console.log(regExp.test('sdwdwd'));//true
// const regExp = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;//valida un email
// console.log(regExp.test('jose@jose.com'));//true
// console.log(regExp.test('josejose.com'));//false
// console.log(regExp.test('jose@jose'));//false


