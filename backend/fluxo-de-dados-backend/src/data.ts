// Crie um arquivo chamado data.ts que exporta um array de produtos. 
// Cada produto será representado por um objeto com propriedades: id (string), name (string) e price (number). 
// Popule manualmente o array com pelo menos 3 produtos.

export type Produto ={
    id: string,
    name: string,
    price: number
}

export const produtos: Produto[] = [
    {
        id: 'aaa',
        name: 'barra olimpica',
        price: 1500

    },
    {
        id: 'bbb',
        name: 'kettlebell',
        price: 500

    },
    {
        id: 'ccc',
        name: 'dumbell',
        price: 1200

    }
]