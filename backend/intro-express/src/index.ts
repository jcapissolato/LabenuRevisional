// //Exercício 1

import express, { request, Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// app.get("/iniciar-express", (request: Request, response: Response) => {
//   response.send("oi express");
// });

// //Exercício 2

// type User = [
//   {
//     id: number;
//     name: string;
//     phone: string;
//     email: string;
//     website: string;
//   }
// ];

// app.get(
//   "https://jsonplaceholder.typicode.com/users",
//   (request: Request, response: Response) => {
//     const users: User[] = [];

//     response.status(200).send({ message: users });
//   }
// );

// //Exercício 3

// type Pessoa = {
//   nome: string;
//   idade: number;
//   sexo: string;
// };

// const usuarios: Pessoa[] = [
//   {
//     nome: "Jorge",
//     idade: 30,
//     sexo: "masculino",
//   },
//   {
//     nome: "Regina",
//     idade: 70,
//     sexo: "feminino",
//   },
//   {
//     nome: "wislaine",
//     idade: 25,
//     sexo: "feminino",
//   },
// ];

// //Exercício 4

// app.get("/usuarios", (request: Request, response: Response) => {
//   response.send(usuarios);
// });

// //Exercício 5

// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// };

// app.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   (request: Request, response: Response) => {
//     const posts: Post[] = [];
//     response.status(200).send({ message: posts });
//   }
// );
// Exercício 6

//Array de usuários com posts

type Post = {
    id: number,
    title: string,
    content: string
  }
type User = {
  id: number;
  name: string;
  email: string;
  posts: Post[]
};

const users: User[] = [
  {
    id: 1,
    name: "Jorge Pissolato",
    email: "jcapissolato@example.com",
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Conteúdo do post 1",
      },
      {
        id: 2,
        title: "Post 2",
        content: "Conteúdo do post 2",
      },
    ],
  },
  {
    id: 2,
    name: "Wislaine",
    email: "Wisfernandes@example.com",
    posts: [
      {
        id: 3,
        title: "Post 3",
        content: "Conteúdo do post 3",
      },
      {
        id: 4,
        title: "Post 4",
        content: "Conteúdo do post 4",
      },
    ],
  },
];

app.get("/posts", (req, response) => {
  let todosPosts: any[] = [];
  users.forEach((user) => {
    todosPosts = todosPosts.concat(user.posts);
  });

  response.json(todosPosts);
});

app.get('/users/posts/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);
  
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
  
    res.json(user.posts);
  });

  app.delete("/users/:userId/posts/:id", (req, res) => {
    const postId: any = req.params.id;
    const userId: any = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);
  
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
  
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const posts = user.posts;
  
      for (let j = 0; j < posts.length; j++) {
        const post = posts[j];
  
        if (post.id === postId) {
          posts.splice(j, 1);
          res.status(200).send(`A postagem com id ${postId} foi deletada com sucesso.`);
          return;
        }
      }
    }
  
    res.status(404).send(`A postagem com id ${postId} não foi encontrada.`);
  });


// A criação de posts dentro do array de usuários pode ser útil para manter as informações relacionadas
// juntas e evitar a necessidade de consultar outra fonte de dados para obter informações sobre o autor
// de cada post. Além disso, isso pode ser útil para aplicativos que exigem uma lógica de acesso aos
// dados mais simples.

app.listen(3003, () => {
  console.log("Servidor está rodando em http://localhost:3003");
});
