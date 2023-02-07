import express, { Request, Response, Express } from "express";
import cors from "cors";
import { afazeres } from "./data";
import type { Afazer } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (request: Request, response: Response) => {
  response.send("pong");
});

// app.get("/afazeres/:status", (req: Request, res: Response) => {
//   const userAuthorization = req.query.authorization;
//   const idAfazer = req.query.id;

//   const searchAfazeresConcluidos = afazeres.filter((afazer) => {
//     return afazer.completed == true;
//   });

//   res.status(200).send(searchAfazeresConcluidos);
// });

app.post("/afazeres", (req: Request, res: Response) => {
  const afazer: Afazer = req.body;
  const novaLista = afazeres.push(afazer);

  console.log(novaLista);

  res.status(200).send(afazeres);
});

app.put("/afazeres/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const afazerId = afazeres.findIndex(afazer => afazer.id === id)

 
  if (afazerId === -1) {
    return res.status(404).json({ message: 'Afazer não encontrado' });
  }

  afazeres[afazerId].completed = !afazeres[afazerId].completed;
  res.status(200).json(afazeres);
  
  console.log(afazeres)
})

app.delete('/afazeres/:id', (req:Request, res: Response)=>{
    const id = parseInt(req.params.id)
    const afazerId = afazeres.findIndex(afazer => afazer.id === id)

    if (afazerId === -1) {
        return res.status(404).json({ message: 'Afazer não encontrado' });
      }

    const removeAfazer = afazeres.splice(afazerId, 1)

    console.log(removeAfazer)

    res.status(200).send(afazeres)
})

app.get('/afazeres/:userId', (req:Request, res:Response) => {
    const userId = parseInt(req.params.userId);
    const userAfazeres = afazeres.filter(afazer => afazer.userId === userId);

    console.log(userAfazeres)

    if (!userAfazeres.length) {
      return res.status(404).json({ message: 'Não há afazeres para esse usuário' });
    }
  
    res.status(200).json(userAfazeres);
  });


const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});
