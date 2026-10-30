
const consumo = Number(prompt("Qual foi o valor total da conta? R$"));
const pessoas = Number(prompt("Entre quantas pessoas a conta será dividida?"));

const valorPessoa = consumo / pessoas;

alert(`----------RESUMO DA CONTA----------

Consumo: R$ ${consumo}

Divisão por pessoa: R$ ${valorPessoa}`);