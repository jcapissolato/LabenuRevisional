import express, {Request, Response, Express} from 'express'
import cors from 'cors'
import { afazeres } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/ping', (request: Request, response: Response)=>{
    response.send("pong")
})

app.get('/afazeres/:status', (req: Request, res: Response)=>{
 
    const searchAfazeresConcluidos = afazeres.filter(afazer=> {
        return afazer.completed == true 
    })

    res.status(200).send(searchAfazeresConcluidos)
})

app.post('/afazeres/add', (req: Request, res: Response)=>{

})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});


