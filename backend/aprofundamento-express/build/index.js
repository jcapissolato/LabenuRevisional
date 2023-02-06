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
app.get('/ping', (request, response) => {
    response.send("pong");
});
app.get('/afazeres/:status', (req, res) => {
    const searchAfazeresConcluidos = data_1.afazeres.filter(afazer => {
        return afazer.completed == true;
    });
    res.status(200).send(searchAfazeresConcluidos);
});
const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});
//# sourceMappingURL=index.js.map