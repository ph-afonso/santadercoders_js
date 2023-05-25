let input = require('readline-sync');
function saudacao() {
    console.log(`Olá, seja bem-vindo(a) ao nosso curso de JavaScript!`);
}
saudacao();

function comeceAqui(nome, area, carreira="programação") {
    const msg = `${nome}, espero te ajudar muito na sua carreira em ${carreira} ${area}. Vamos lá?`;

    return msg
}
let nome = input.question('Muito prazer, eu me chamo Phelipe e já que seremos professor e aluno, como posso te chamar? ');
let area = input.question(`${nome}, agora me conta, qual a área que você mais gosta? `);

//Usando parâmetro default
//comeceAqui(nome, area);

//Passando o terceiro parâmetro
console.log(comeceAqui(nome, area, 'programação'));