console.log("olá mundo");

// Exercício 1

// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”).
// A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:

function formatBirthdate(name: string, birthdate: string): string {
  const [day, month, year] = birthdate.split("/");
  return `${name} nasceu em ${day} de ${month} de ${year}.`;
}

// console.log(formatBirthdate("Jorge", "24/04/1992"));

//Exercício 2

// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

function parametroQualquer(qualquer: number | string | boolean | object) {
  return console.log(typeof qualquer);
}
// console.log(parametroQualquer(20 !== 20));

//Exercicio 3

// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes.
// Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme.
// Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}
type Filme = {
  nome: string;
  ano: number;
  genero: GENERO;
  pontos?: any;
};

// Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional:
// 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

// Considerando todas estas informações,
// crie uma função que receba todas essas informações como parâmetros( 3 essenciais + 1 opcional)
// e retorne todas informações organizadas em um type

function organizarFilmes(
  nome: string,
  ano: number,
  genero: GENERO,
  pontos?: number
): Filme {
  const filme = { nome, ano, genero, pontos };
  return filme;
}
// console.log(organizarFilmes("Duna", 2021, GENERO.ACAO, 74));

// O seguinte array traz as pessoas colaboradoras de uma empresa,
// com seus salários, setores e se trabalham presencialmente ou por home office:

enum SETORES {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

type Pessoa = {
  nome: string;
  salário: number;
  setor: string;
  presencial: boolean;
};

// const colaboradores: Pessoa[] = [
//   { nome: "Marcos", salário: 2500, setor: SETORES , presencial: true },
//   { nome: "Maria", salário: 1500, setor: SETORES, presencial: false },
//   { nome: "Salete", salário: 2200, setor: SETORES, presencial: true },
//   { nome: "João", salário: 2800, setor: SETORES, presencial: false },
//   { nome: "Josué", salário: 5500, setor: SETORES, presencial: true },
//   { nome: "Natalia", salário: 4700, setor: SETORES, presencial: true },
//   { nome: "Paola", salário: 3500, setor: SETORES, presencial: true },
// ];
const colaboradores: Pessoa[] = [
  { nome: "Davi", salário: 2500, setor: "marketing", presencial: true },
  { nome: "Flávio", salário: 1500, setor: "vendas", presencial: false },
  { nome: "Wilson", salário: 2200, setor: "financeiro", presencial: true },
  { nome: "Fillipe", salário: 2800, setor: "marketing", presencial: false },
  { nome: "JV", salário: 5500, setor: "financeiro", presencial: true },
  { nome: "Victor", salário: 4700, setor: "vendas", presencial: true },
  { nome: "Pedro", salário: 3500, setor: "marketing", presencial: true },
];

function trabalhoPresencial(colaboradores: Pessoa[]): Pessoa[] {
  return colaboradores.filter(
    (Pessoa) => Pessoa.setor === SETORES.MARKETING && Pessoa.presencial === true
  );
}

// console.log(trabalhoPresencial(colaboradores));

// Considerando o array de usuários abaixo,
// crie uma função que receba este array como parâmetro e
// retorne uma lista com apenas os emails dos usuários “admin”.

type user = {
  name: string;
  email: string;
  role: string;
};
const usuarios: user[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

function administrador(usuarios: user[]): string[] {
  return usuarios
    .filter((usuario) => usuario.role === "admin")
    .map((usuario) => usuario.email);
}

// console.log(administrador(usuarios));

// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital.
// Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes.
// Basicamente, eles salvam o nome do clientes, o saldo total e
// uma lista contendo todas os débitos realizados pelo cliente. Exemplo:

type Clientes = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const contas: Clientes[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

// Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos.
// Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro,
// atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

function atualizarSaldo(contas: Clientes[]) {
  contas.forEach((conta) => {
    conta.saldoTotal -= conta.debitos.reduce(
      (total, debito) => total + debito,
      0
    );
  });
  return contas.filter((conta) => conta.saldoTotal < 0);
}
// console.log(atualizarSaldo(contas));

// Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o
// sistema de organização de estoque da empresa. A pessoa desenvolvedora anterior a você chegou a
// criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:

// Aproveitando a função já feita, faça uma nova função que receba o `array`de estoque como parâmetro,
// use a função `ajustaPreco` para corrigir os preços e retorne a lista de estoque ordenada pela
// quantidade de cada produto.

type Produtos = {
  nome: string;
  quantidade: number;
  valorUnitario: number 
};

const estoque: Produtos[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

const ordenaEstoque = (estoque: Produtos[]): Produtos[] => {
  estoque.forEach((produto: Produtos) => {
    produto.valorUnitario = Number(ajustaPreco(produto.valorUnitario).replace("R$ ", "").replace(",", "."));
  });
  estoque.sort((a: Produtos, b: Produtos) => a.quantidade - b.quantidade);
  return estoque;
};
console.log(ajustaPreco(1000000))
console.log(ordenaEstoque(estoque))