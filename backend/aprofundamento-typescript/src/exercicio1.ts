// Exercício 1

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?

const minhaString:string = "hello world"

// O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322)

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero:number | string = 10

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

//`nome`, que é uma string;

//`idade`, que é um número;

//`corFavorita`, que é uma string.

const pessoa:{
    nome:string,
    idade:number,
    corFavorita:string,
} = {
    nome: "jorge",
    idade: 30,
    corFavorita: "verde"
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. 
// Utilize um enum para isso.


type person = {
    name: string,
    age: number,
    corFavorita: string
}
enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA  = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}
const jorge: person = {
    name: "jorge",
    age: 30,
    corFavorita: CoresArcoIris.VERDE
}
const wislaine: person = {
    name: "wislaine",
    age: 25,
    corFavorita: CoresArcoIris.VERMELHO
}
const regina: person = {
    name: "regina",
    age: 70,
    corFavorita: CoresArcoIris.AMARELO
}


