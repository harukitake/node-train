import Express, {NextFunction} from "express";

const port = 3000;

const app = Express();

const router = Express.Router()

router.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
});

app.use(router)

app.listen(port, () => console.log('server start'));

