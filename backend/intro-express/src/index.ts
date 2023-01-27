//Exercício 1

import express, { request, Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/iniciar-express',(request:Request, response: Response)=>{
    response.send("oi express")
})

//Exercício 2

type User = {
    id: number;
    name: string;
    phone: string;
    email: string;
    website: string;
  }


app.get('https://jsonplaceholder.typicode.com/users', (request:Request, response: Response)=>{
   

      const users: User[] = []

      response.status(200).send({message:users})
})

//Exercício 3 

type Pessoa = {
    nome: string,
    idade: number,
    sexo: string
}

const usuarios: Pessoa[] = [
    {
        nome: 'Jorge',
        idade: 30,
        sexo: 'masculino'
    },
    {
        nome: 'Regina',
        idade: 70,
        sexo: 'feminino'
    },
    {
        nome: 'wislaine',
        idade: 25,
        sexo: 'feminino'
    },
]

app.get('/usuarios',(request:Request, response: Response)=>{
    response.send(usuarios)
})

//Exercício 4

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

app.get('https://jsonplaceholder.typicode.com/posts',(request:Request, response:Response)=>{
 const posts: Post[] = []
 response.status(200).send({message:posts})
})

app.listen(3003, ()=>{
    console.log('Servidor está rodando em http://localhost:3003')
})