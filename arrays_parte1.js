let arr = ['Phelipe', 23, 1.73, true];

console.log(arr);
console.log(`Primeiro elemento: ${arr[0]}`);
console.log(`Segundo elemento: ${arr[1]}`);
console.log(`Terceiro elemento: ${arr[2]}`);
console.log(`Quarto elemento: ${arr[3]}`);

console.log(`O array arr, possui ${arr.length} elementos`);

for ( let i = 0; i < arr.length; i++) {
    console.log(`Elemento P[${i}]: ${arr[i]}`);
}

for (let elemento of arr) {
    console.log(`Elemento: ${elemento}`);
}

for (let indice in arr) {
    console.log(`Elemento no array: ${arr[indice]}`)
}