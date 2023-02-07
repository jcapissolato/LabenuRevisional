"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/ping", (request, response) => {
    response.send("pong");
});
app.post("/afazeres", (req, res) => {
    const afazer = req.body;
    const novaLista = data_1.afazeres.push(afazer);
    console.log(novaLista);
    res.status(200).send(data_1.afazeres);
});
app.put("/afazeres/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const afazerId = data_1.afazeres.findIndex(afazer => afazer.id === id);
    if (afazerId === -1) {
        return res.status(404).json({ message: 'Afazer não encontrado' });
    }
    data_1.afazeres[afazerId].completed = !data_1.afazeres[afazerId].completed;
    res.status(200).json(data_1.afazeres);
    console.log(data_1.afazeres);
});
app.delete('/afazeres/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const afazerId = data_1.afazeres.findIndex(afazer => afazer.id === id);
    if (afazerId === -1) {
        return res.status(404).json({ message: 'Afazer não encontrado' });
    }
    const removeAfazer = data_1.afazeres.splice(afazerId, 1);
    console.log(removeAfazer);
    res.status(200).send(data_1.afazeres);
});
app.get('/afazeres/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userAfazeres = data_1.afazeres.filter(afazer => afazer.userId === userId);
    console.log(userAfazeres);
    if (!userAfazeres.length) {
        return res.status(404).json({ message: 'Não há afazeres para esse usuário' });
    }
    res.status(200).json(userAfazeres);
});
const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});
//# sourceMappingURL=index.js.map