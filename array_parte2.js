const arr1 = [30, 12, 45, 34, 29];
const arr2 = [];
console.log(arr1.slice(0, 2));
console.log(arr1.slice(2));

console.log(`Antes do push: ${arr2}`);

arr2.push(10,20,30);

console.log(`Depois do push: ${arr2}`);

console.log(`Antes do unshift: ${arr2}`);

arr2.unshift(40);

console.log(`Depois de adicionar com unshift: ${arr2}`);

console.log(`Antes do pop: ${arr2}`);

const elementoRemovido = arr2.pop();

console.log(`Elemento removido: ${elementoRemovido}`);
console.log(`Depois de remover com pop: ${arr2}`);

console.log(`Antes do shift: ${arr2}`);

const elementoRemovido1 = arr2.shift();

console.log(`Elemento removido: ${elementoRemovido1}`);
console.log(`Depois de remover com shift: ${arr2}`);

console.log(`Array 1: ${arr1}`);
console.log(`Array 2: ${arr2}`);

console.log('Array final: ', arr1.concat(arr2));

console.clear();

console.log(arr1);
let indice34 = arr1.indexOf(34);
console.log(indice34);

const arr3 = [3,5,3,3,5,3,6];
console.log(arr3.lastIndexOf(3));

console.log(arr1.includes(10));

console.log(arr3.reverse());


