
export type Transacoes = {
    valor: number,
    data: Date | string,
    descricao: string
}
export type Conta = {
    nome: string, 
    cpf: string,
    nascimento: Date,
    saldo: number,
    extrato: Array<Transacoes>

}

export const contas: Conta[] = []