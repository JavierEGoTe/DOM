//var parrafos = document.getElementsByClassName('parrafo');
//console.log('parrafos');
//document.getElementsByClassName('parrafo')[0].innerHTML = 'Hola soy un texto diferente';
/*document.getElementsByClassName('parrafo')[0].innerHTML = 'Parrafo cambiado dinamicamente';
document.getElementById('parrafo2').innerHTML = 'Soy el parrafo 2';*/

//document.querySelector('parrafo').textContent = "Nuevo texto de parrafo";

document.querySelectorAll('.parrafo')[0].textContent = 'Nuevo texto de parrafo';
document.querySelector('#parrafo2').textContent = 'Nuevo texto de parrafo';

var parrafo1 = document.querySelectorAll('.parrafo')[0];
var parrafo2 = document.querySelector('#parrafo2');

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);
