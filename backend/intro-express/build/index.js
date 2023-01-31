"use strict";
// //Exercício 1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const users = [
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
    let todosPosts = [];
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
    const postId = req.params.id;
    const userId = parseInt(req.params.userId);
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
