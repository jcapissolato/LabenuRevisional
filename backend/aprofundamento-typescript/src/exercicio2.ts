//Observe a função a seguir, escrita em JavaScript:

// a) Quais são as entradas e saídas dessa função? 
// Copie a função para um arquivo.ts e faça a tipagem desses parâmetros
type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: {
        maior: number,
        menor: number,
        media: number
    }
}

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
   
    return estatisticas
    
}

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. 
// Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeDados = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }

