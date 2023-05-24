// Igualdade == (Valor igual) ou === (Valor e tipo)
const numero = 10;
console.log(numero == 10);
console.log(numero == '10');
console.log(numero === '10');
console.log(numero == 20);

// Desigualdade != (Valor diferente) ou !== (Valor e tipo)
console.log(numero != 10);
console.log(numero != '10');
console.log(numero !== '10');
console.log(numero != 20);

// Conjunções Lógicas

// AND (&&)
const idade = 23;
const habilitado = true;

console.log(idade >= 18 && habilitado === true);

// OR (||)
const estudante = true;
const idoso = false;

console.log(estudante || idoso);

// NOT (!)

const votoFacultativo = true;

console.log(!votoFacultativo);