function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}
function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Insira sua primeira cor favorita");
    const cor2 = prompt("Insira sua segunda cor favorita");
    const cor3 = prompt("Insira sua terceira cor favorita");
    console.log([cor1, cor2, cor3]);
}
function checaAnoBissexto(ano) {
    const cond1 = ano % 400 === 0;
    const cond2 = ano % 4 === 0 && ano % 100 !== 0;
    return cond1 || cond2;
}
function checaRenovacaoRG() {
    const anoAtual = Number(prompt("Digite o ano atual"));
    const anoNascimento = Number(prompt("Digite o ano de nascimento"));
    const anoEmissao = Number(prompt("Digite o ano de emissão do documento"));
    const idade = anoAtual - anoNascimento;
    const tempoCarteira = anoAtual - anoEmissao;
    const cond1 = idade <= 20 && tempoCarteira >= 5;
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    const cond3 = idade > 50 && tempoCarteira >= 15;
    return cond1 || cond2 || cond3;
}
function somar(n1, n2) {
    const soma = n1 + n2;
    return soma;
}
function subtrair(n1, n2) {
    const sub = n1 - n2;
    return sub;
}
function mult(n1, n2) {
    const multiplicar = n1 * n2;
    return multiplicar;
}
function maiorMenor(n1, n2) {
    let maiorNumero;
    let menorNumero;
    if (n1 > n2) {
        maiorNumero = n1;
        menorNumero = n2;
        return n1;
    }
    else {
        maiorNumero = n2;
        menorNumero = n1;
        return n2;
    }
}
const dna = ["a", "t", "c", "g"];
console.log(dna.reverse());
//# sourceMappingURL=index.js.map