const input = require('readline-sync');

const numero_sorteado = 5;

let numero = Number(input.question('Qual o numero voce escolhe? '));

while (numero != numero_sorteado) {
    console.log('Você errou o número, tente novamente...');
    numero = Number(input.question('Qual o numero voce escolhe? '));
}
console.log('Você acertou!');
