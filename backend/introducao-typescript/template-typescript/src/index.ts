//escreva o seu código aqui

// console.log("hello world")

//Exercício 1

function checaTriangulo(a: number, b: number, c: number) {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

//Exercício 2

function imprimeTresCoresFavoritas() {
  const cor1: string = prompt("Insira sua primeira cor favorita");
  const cor2: string = prompt("Insira sua segunda cor favorita");
  const cor3: string = prompt("Insira sua terceira cor favorita");
  console.log([cor1, cor2, cor3]);
}

// Exercício 3

function checaAnoBissexto(ano: number) {
  const cond1 = ano % 400 === 0;
  const cond2 = ano % 4 === 0 && ano % 100 !== 0;
  return cond1 || cond2;
}

//Exercício 4

// function comparaDoisNumeros(num1: number, num2: number): number {
//   let maiorNumero;
//   let menorNumero;

//   if (num1 > num2) {
//     maiorNumero = num1;
//     menorNumero = num2;
//   } else {
//     maiorNumero = num2;
//     menorNumero = num1;
//   }

//   const diferenca = maiorNumero - menorNumero;

//   return diferenca;
// }

//Exercício 5

function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual"));
  const anoNascimento = Number(prompt("Digite o ano de nascimento"));
  const anoEmissao = Number(prompt("Digite o ano de emissão do documento"));

  const idade: number = anoAtual - anoNascimento;
  const tempoCarteira: number = anoAtual - anoEmissao;

  const cond1 = idade <= 20 && tempoCarteira >= 5;
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
  const cond3 = idade > 50 && tempoCarteira >= 15;

  return cond1 || cond2 || cond3;
}

//Exercício 6

function somar(n1: number, n2: number): number {
  const soma = n1 + n2;
  return soma;
}
function subtrair(n1: number, n2: number): number {
  const sub = n1 - n2;
  return sub;
}
function mult(n1: number, n2: number): number {
  const multiplicar = n1 * n2;
  return multiplicar;
}
function maiorMenor(n1: number, n2: number): number {
  let maiorNumero: number;
  let menorNumero: number;

  if (n1 > n2) {
    maiorNumero = n1;
    menorNumero = n2;
    return n1;
  } else {
    maiorNumero = n2;
    menorNumero = n1;
    return n2;
  }
}
// console.log(
//   somar(50, 128),
//   subtrair(90, 21),
//   mult(26, 85),
//   maiorMenor(1236554789, 21564879321)
// );

//Exercício 7 

const dna = ["a","t","c","g"]

console.log(dna.reverse())

