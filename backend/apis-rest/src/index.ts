import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});

type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};
enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

app.get("/users/:type", (req: Request, res: Response) => {
  let codeError = 400;
  const type = req.params.type as UserType
  
  try {
    
    const filterUsers = users.filter((user)=> user.type === type.toUpperCase())
    res.status(200).send(filterUsers);
  } catch (error) {
    res.status(codeError).send({ message: "lista não encontrada" });
  }
});

app.get('/users/search', (req:Request, res: Response)=>{
  let codeError = 400
  let name = req.query.name
  const filterName = users.filter((user)=> user.name === name)
  try {
    if(!name){
      res.status(codeError).send({message: 'informe o usuário'})
    }
    if (filterName.length > 0) {
      res.json(filterName[0]);
    }else{
      res.status(404).send('Usuário não encontrado');
    }
    res.status(200).send(filterName)
  } catch (error) {
    const codeError = 404
    res.status(codeError).send({message: 'usuário não encontrado'})
  }
})

app.post('/users',(req:Request, res:Response)=>{
  
})

