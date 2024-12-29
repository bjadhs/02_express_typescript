import {Config} from './config/index';
import express, { Request, Response, NextFunction } from 'express';
import createHttpError, {HttpError} from 'http-errors'

const app = express();

app.get('/', async (req, res, next)=>{
    const err = createHttpError(401,'This is a bad request');
    next(err);
    // res.send("Hello World");


})

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: ''

            }
        ]
    })
});

const startServer = () =>{
    const PORT = Config.PORT
    try{
        app.listen(PORT as string, ()=> console.log(`Server is running in port ${PORT}`));
    }catch(error){
        console.log("Error in starting server", error);
        process.exit(1);
    }
}
startServer();
