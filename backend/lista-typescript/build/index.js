"use strict";
console.log("olá mundo");
function formatBirthdate(name, birthdate) {
    const [day, month, year] = birthdate.split("/");
    return `${name} nasceu em ${day} de ${month} de ${year}.`;
}
function parametroQualquer(qualquer) {
    return console.log(typeof qualquer);
}
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function organizarFilmes(nome, ano, genero, pontos) {
    const filme = { nome, ano, genero, pontos };
    return filme;
}
var SETORES;
(function (SETORES) {
    SETORES["MARKETING"] = "marketing";
    SETORES["VENDAS"] = "vendas";
    SETORES["FINANCEIRO"] = "financeiro";
})(SETORES || (SETORES = {}));
const colaboradores = [
    { nome: "Davi", salário: 2500, setor: "marketing", presencial: true },
    { nome: "Flávio", salário: 1500, setor: "vendas", presencial: false },
    { nome: "Wilson", salário: 2200, setor: "financeiro", presencial: true },
    { nome: "Fillipe", salário: 2800, setor: "marketing", presencial: false },
    { nome: "JV", salário: 5500, setor: "financeiro", presencial: true },
    { nome: "Victor", salário: 4700, setor: "vendas", presencial: true },
    { nome: "Pedro", salário: 3500, setor: "marketing", presencial: true },
];
function trabalhoPresencial(colaboradores) {
    return colaboradores.filter((Pessoa) => Pessoa.setor === SETORES.MARKETING && Pessoa.presencial === true);
}
const usuarios = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" },
];
function administrador(usuarios) {
    return usuarios
        .filter((usuario) => usuario.role === "admin")
        .map((usuario) => usuario.email);
}
const contas = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];
function atualizarSaldo(contas) {
    contas.forEach((conta) => {
        conta.saldoTotal -= conta.debitos.reduce((total, debito) => total + debito, 0);
    });
    return contas.filter((conta) => conta.saldoTotal < 0);
}
const estoque = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];
const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace(".", ",");
    return "R$ " + valorAjustado;
};
const ordenaEstoque = (estoque) => {
    estoque.forEach((produto) => {
        produto.valorUnitario = Number(ajustaPreco(produto.valorUnitario).replace("R$ ", "").replace(",", "."));
    });
    estoque.sort((a, b) => a.quantidade - b.quantidade);
    return estoque;
};
console.log(ajustaPreco(1000000));
console.log(ordenaEstoque(estoque));
//# sourceMappingURL=index.js.map