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
    contas.push({
      nome,
      cpf,
      nascimento,
      saldo: 0,
      extrato: [],
    });

    res.status(201).send({message: 'conta criada com sucesso!'})
  } catch (error) {
    res.status(400).send({message: 'erro ao criar a conta'})
  }
});

app.get('/usuario/pegar', (req:Request, res: Response)=>{
    try {
        res.status(200).send(contas)
    } catch (error) {
        res.status(400).send({message: "falha ao acessar o banco"})
    }
})
