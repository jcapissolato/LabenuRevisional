// Exercício 1

// a)
// primeiro criamos o package.json, depois acessamos através do script

// b)
// const valorTerminal = process.argv[2]
// const valorTerminal2 = process.argv[3]
// console.log("Olá,",valorTerminal,"! Você tem", valorTerminal2,"anos.")

// c)
// const valorTerminal = process.argv[2]
// const valorTerminal2 = process.argv[3]
// const valor = Number(valorTerminal2) + 7
// console.log("Olá,",valorTerminal,"! Você tem",valorTerminal2," anos. Em sete anos você terá",valor)

// Exercício 2

// const valorUm = process.argv[2];
// const valorDois = process.argv[3];

// const add = Number(valorUm) + Number(valorDois);
// const sub = Number(valorUm) - Number(valorDois);
// const mult = Number(valorUm) * Number(valorDois);
// const div = Number(valorUm) / Number(valorDois);

// console.log(mult);

//Exercício 3

const listaDeTarefas = []

const addTarefa = process.argv[2]

const tarefa = listaDeTarefas.push(addTarefa)

const novaLista = listaDeTarefas.map((addTarefa)=>{
    return addTarefa
})



console.log("Tarefa adicionada com sucesso!", novaLista)