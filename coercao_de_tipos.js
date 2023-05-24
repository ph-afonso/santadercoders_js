//Conversão de tipos

//Explicita (Manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroString = String(numero);
console.log(numeroString, typeof numeroString);
console.clear();

// Implicita (Automática)
console.log(10 + 1);
console.log(10 + '1');
console.log(10 - '1');
console.log(10 * '1');
console.log(10 - 'Um');