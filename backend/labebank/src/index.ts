import express, { Express, Request, Response } from "express";
import cors from "cors";
import { contas } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});

app.post("/usuario/criar", (req: Request, res: Response) => {
  try {
    const { nome, cpf, nascimentoString } = req.body;
    const [dia, mes, ano] = nascimentoString.split("/");
    const nascimento: Date = new Date(`${ano}-${mes}-${dia}`);

    const idadeMilisegundos: number =
      new Date().getTime() - nascimento.getTime();
    const idadeAnos: number = idadeMilisegundos / 1000 / 60 / 60 / 24 / 365;

    if (idadeAnos < 18) {
      res.statusCode = 406;
      throw new Error("idade não permitida");
    }
    if (contas.find((conta) => conta.cpf === cpf)) {
      res.statusCode = 406;
      throw new Error("CPF já está atrelado a outra conta existente");
    }
    contas.push({
      nome,
      cpf,
      nascimento,
      saldo: 0,
      extrato: [],
    });

    res.status(201).send({ message: "conta criada com sucesso!" });
  } catch (error: any) {
    res.send(error.message);
  }
});

app.get("/usuario/pegar", (req: Request, res: Response) => {
  try {
    if (!contas.length) {
      res.statusCode = 404;
      throw new Error("nenhuma conta encontrada");
    }
    res.status(200).send(contas);
  } catch (error: any) {
    res.send(error.message);
  }
});

app.get("/usuario/saldo/:cpf", (req: Request, res: Response) => {
  try {
    const { cpf } = req.params;
    console.log(cpf);
    const conta = contas.find((conta) => conta.cpf === cpf);

    if (!conta) {
      res.statusCode = 404;
      throw new Error("Conta não encontrada");
    }

    const { saldo } = conta;
    const saldoRequest = req.query.saldo;

    if (saldoRequest && saldoRequest !== saldo.toString()) {
      res.statusCode = 400;
      throw new Error(
        "O saldo informado é diferente do que está salvo no sistema"
      );
    }

    res.send({ saldo });
  } catch (error: any) {
    res.send(error.message);
  }
});

app.put("/usuario/depositar", (req: Request, res: Response) => {
  try {
    const { nome, cpf, valor } = req.body;
    const conta = contas.find((conta) => conta.cpf === cpf);

    if (!conta) {
      res.statusCode = 404;
      throw new Error("Conta não encontrada");
    }

    if (conta.nome !== nome) {
      res.statusCode = 400;
      throw new Error(
        "Nome informado é diferente do que está salvo no sistema"
      );
    }

    const saldoAnterior = conta.saldo;
    const novoSaldo = saldoAnterior + valor;
    conta.saldo = novoSaldo;
    const dataTransacao = new Date().getTime();
    const transacao: any = {
      descricao: "Depósito de dinheiro",
      valor,
      data: dataTransacao,
    };
    conta.extrato.push(transacao);

    res.send({ saldoAnterior, novoSaldo });
  } catch (error: any) {
    res.send(error.message);
  }
});

app.post("/usuario/pagar-conta", (req: Request, res: Response) => {
  try {
    const { cpf, descricao, valor, dataVencimento } = req.body;
    const [dia, mes, ano] = dataVencimento.split("/");
    const vencimento: Date = new Date(`${ano}-${mes}-${dia}`);
    const conta = contas.find((conta) => conta.cpf === cpf);
    console.log(vencimento)
    if (!conta) {
      res.statusCode = 404;
      throw new Error("Conta não encontrada");
    }

    const dataPagamento = vencimento ? new Date(vencimento) : new Date();
    console.log(dataPagamento)
    const transacao: any = {
      descricao,
      valor,
      data: dataPagamento.getTime(),
    };

    conta.extrato.push(transacao);

    res.status(201).send({ message: "Pagamento realizado com sucesso!" });
  } catch (error: any) {
    res.send(error.message);
  }
});

