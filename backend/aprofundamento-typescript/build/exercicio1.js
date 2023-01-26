"use strict";
const minhaString = "hello world";
const meuNumero = 10;
const pessoa = {
    nome: "jorge",
    idade: 30,
    corFavorita: "verde"
};
var CoresArcoIris;
(function (CoresArcoIris) {
    CoresArcoIris["VERMELHO"] = "vermelho";
    CoresArcoIris["LARANJA"] = "laranja";
    CoresArcoIris["AMARELO"] = "amarelo";
    CoresArcoIris["VERDE"] = "verde";
    CoresArcoIris["AZUL"] = "azul";
    CoresArcoIris["AZULESCURO"] = "azul-escuro";
    CoresArcoIris["VIOLETA"] = "violeta";
})(CoresArcoIris || (CoresArcoIris = {}));
const jorge = {
    name: "jorge",
    age: 30,
    corFavorita: CoresArcoIris.VERDE
};
const wislaine = {
    name: "wislaine",
    age: 25,
    corFavorita: CoresArcoIris.VERMELHO
};
const regina = {
    name: "regina",
    age: 70,
    corFavorita: CoresArcoIris.AMARELO
};
console.log(regina);
//# sourceMappingURL=exercicio1.js.map