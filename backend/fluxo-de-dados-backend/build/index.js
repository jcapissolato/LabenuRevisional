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
const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});
app.get("/test", (req, res) => {
    try {
        res.status(200).send({ message: "api test" });
    }
    catch (error) {
        res.status(400).send("erro no teste");
    }
});
app.post("/produto", (req, res) => {
    const produto = req.body;
    const name = req.body.name;
    const price = req.body.price;
    try {
        if (!name || !price) {
            return res.status(400).send({ message: "Insira um nome e um preço válidos." });
        }
        if (typeof name !== "string") {
            return res.status(400).send({ message: "O nome do produto deve ser uma string." });
        }
        if (price !== "number") {
            return res.status(400).send({ message: "O preço do produto deve ser um número." });
        }
        if (price <= 0) {
            return res.status(400).send({ message: "O preço do produto deve ser maior que zero." });
        }
        const novaLista = data_1.produtos.push(produto);
        console.log(novaLista);
        res.status(200).send(data_1.produtos);
    }
    catch (error) {
        if (!produto.name || produto.price) {
            res.status(400).send({ message: "produto não cadastrado" });
        }
    }
    console.log(produto);
});
app.get("/produtos", (req, res) => {
    try {
        res.status(200).send(data_1.produtos);
    }
    catch (error) {
        res
            .status(400)
            .send({ message: "não foi possivel visualizar a lista de produtos" });
    }
});
app.put("/produtos/:id", (req, res) => {
    const id = req.params.id;
    const price = parseInt(req.body.price);
    try {
        const produtoId = data_1.produtos.filter((produto) => produto.id === id);
        const index = data_1.produtos.findIndex((p) => p.id === id);
        data_1.produtos[index].price = price;
        return res.status(200).json(data_1.produtos);
    }
    catch (error) {
        if (!id) {
            res.status(404).send({ message: "informe um id válido" });
        }
    }
});
app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    const index = data_1.produtos.findIndex((p) => p.id === id);
    try {
        if (id !== id) {
            res.status(400).send("ocorreu um erro");
        }
        data_1.produtos.splice(index, 1);
        res.status(200).send(data_1.produtos);
    }
    catch (error) { }
});
//# sourceMappingURL=index.js.map