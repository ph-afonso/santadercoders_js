//Condicionais

const idade = 23;

if (idade >= 18) {

    console.log('Você é maior de idade!');

} else {

    console.log('Você é menor de idade!');

}
console.clear();

const media = 6.85
// Se média maior ou igual a 7: Aprovado
if (media >= 7) {
    console.log('Aprovado(a)');
}
// Se média menor que 7 e média maior igual 5: Recuperaçãp
else if ( (media < 7) && (media >= 5) ) {
    console.log('Recuperação');
}
// Se média menor que 5: Reprovado
else {
    console.log('Reprovado(a)');
}