let pessoa = {
    nome: 'Phelipe',
    idade: 23,
    'estudando-agora': true
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['estudando-agora']);

pessoa.altura = 1.73;

console.log(pessoa);
console.log(pessoa.altura);

delete pessoa['estudando-agora'];
console.log(pessoa);

for (let chave in pessoa) {
    console.log(chave);
}