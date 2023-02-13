import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Produto, produtos } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});

app.get("/test", (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "api test" });
  } catch (error) {
    res.status(400).send("erro no teste");
  }
});

app.post("/produto", (req: Request, res: Response) => {
  const produto: Produto = req.body;
  const name = req.body.name as string
  const price = req.body.price as number
  try {
    if (!name || !price) {
      return res.status(400).send({ message: "Insira um nome e um preço válidos." });
    }
  
    if ( typeof name !== "string") {
      return res.status(400).send({ message: "O nome do produto deve ser uma string." });
    }
  
    if ( typeof price !== "number") {
      return res.status(400).send({ message: "O preço do produto deve ser um número." });
    }
  
    if (price <= 0) {
      return res.status(400).send({ message: "O preço do produto deve ser maior que zero." });
    }
    const novaLista = produtos.push(produto);
    console.log(novaLista);
    res.status(200).send(produtos);

  } catch (error) {
    if (!produto.name || produto.price) {
      res.status(400).send({ message: "produto não cadastrado" });
    }
  }

  console.log(produto);
});

app.get("/produtos", (req: Request, res: Response) => {
  try {
    res.status(200).send(produtos);
  } catch (error) {
    res
      .status(400)
      .send({ message: "não foi possivel visualizar a lista de produtos" });
  }
});

app.put("/produtos/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const price = parseInt(req.body.price);

  try {
    const produtoId = produtos.filter((produto) => produto.id === id);
    const index = produtos.findIndex((p) => p.id === id);

    produtos[index].price = price;

    return res.status(200).json(produtos);
  } catch (error) {
    if (!id) {
      res.status(404).send({ message: "informe um id válido" });
    }
  }
});

app.delete("/produtos/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const index = produtos.findIndex((p) => p.id === id);
  try {
    if (id !== id) {
      res.status(400).send("ocorreu um erro");
    }

    produtos.splice(index, 1);
    res.status(200).send(produtos);
  } catch (error) {}
});
