import express, { Express } from "express";
import cors from "cors";


const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
});



// //CREATE TABLE Actor (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR (255) NOT NULL,
//     salary FLOAT NOT NULL,
//     birth_date DATE NOT NULL,
//     gender VARCHAR(6) NOT NULL
// );

// a) Nesta tabela, utilizamos o FLOAT para declarar o salário, 
// porque esta é uma forma de representar um número não inteiro em uma tabela. 
// Explique os demais comandos que estão nessa query.

// VARCHAR = variavel de caracteres
// PRIMARY KEY = característica única que difere aquele item
// NOT NULL = este campo não pode vir sem informações 
// DATE = variavel com formato data YYYY-MM-DD

// b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. 
// Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

// SHOW DATABASES = mostra todos os bancos de dados
// Show TABLES = mostra todas as tabelas 

// c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. 
// Utilize o comando  DESCRIBE Actor e explique os resultados.

//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR (255) NOT NULL,
//     salary FLOAT NOT NULL,
//     birth_date DATE NOT NULL,
//     gender VARCHAR(6) NOT NULL

// INSERT INTO Actor (id, name, salary, birth_date, gender)
// VALUES(
//     "001", 
//     "Tony Ramos",
//     400000,
//     "1948-08-25", 
//     "male"
//   );

// a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 
// e data de nascimento 23 de Agosto de 1963

// INSERT INTO Actor (id, name, salary, birth_date, gender)
// VALUES(
//     "001", 
//     "Glória Pires",
//     1200000,
//     "1963-08-23", 
//     "female"
//   );

// b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. 
// Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) 
// e explique porque esse erro aconteceu.

// Erro de PRIMARY KEY duplicado. De acordo com a estrutura da tabela, 
// o id não pode ser repetido pois é unico para cada ator

// Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. 
// Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e 
// explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione,  
// teste o comando e anote-o também como resposta

// INSERT INTO Actor (id, name, salary)
// VALUES(
//   "003", 
//   "Fernanda Montenegro",
//   300000,
//   "1929-10-19", 
//   "female"
// );

// Na frente de Actor, precisa ser passado id, name, salary e na verdade foram passados todos os 
// dados genero e salario

// INSERT INTO Actor (id, salary, birth_date, gender)
// VALUES(
//   "004",
//   400000,
//   "1949-04-18", 
//   "male"
// );

// De acordo com a estrutura da tabela o nome nãopode ser nulo

// INSERT INTO Actor (id, name, salary, birth_date, gender)
// VALUES(
//   "005", 
//   "Juliana Paes",
//   719333.33,
//   1979-03-26, 
//   "female"
// );

// A data não está no formato exigido pela tabela

// f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

// INSERT INTO Actor (id, name, salary, birth_date, gender)
// VALUES(
//     "006", 
//     "Ximbinha",
//     4000000,
//     "1941-05-25", 
//     "male"
//   );

// INSERT INTO Actor (id, name, salary, birth_date, gender)
// VALUES(
//     "007", 
//     "Joelma",
//     10000,
//     "1992-08-21", 
//     "female"
//   );


// Com os dados criados, podemos nos aventurar nas queries de seleção de dados. 
// Elas são indicadas pelo operador SELECT. Talvez a query mais famosa que existe é:

// SELECT * FROM Actor

// a) *Escreva uma query que retorne todas as informações das atrizes*

// SELECT * from Actor WHERE gender = "female";

// b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

// SELECT salary from Actor WHERE name = "Tony Ramos";

// c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. 
// Explique o resultado.*

// SELECT * from Actor WHERE gender = "invalid"; retorna as linhas e colunas que não possuem "male" ou "female"

// d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário 
// com o valor máximo de R$500.000*

// SELECT id, name, salary from Actor WHERE salary < 500000;

// e) **T*ente usar a query abaixo. Você vai reparar que ela vai gerar um erro. 
// Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e 
// explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, 
// teste o comando e anote-o também como resposta*

// SELECT id, nome from Actor WHERE id = "002"