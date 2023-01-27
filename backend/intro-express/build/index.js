"use strict";
//Exercício 1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/iniciar-express', (request, response) => {
    response.send("oi express");
});
app.get('https://jsonplaceholder.typicode.com/users', (request, response) => {
    const users = [];
    response.status(200).send({ message: users });
});
const usuarios = [
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
];
app.get('/usuarios', (request, response) => {
    response.send(usuarios);
});
app.get('https://jsonplaceholder.typicode.com/posts', (request, response) => {
    const posts = [];
    response.status(200).send({ message: posts });
});
app.listen(3003, () => {
    console.log('Servidor está rodando em http://localhost:3003');
});
