import {Config} from './config/index';
import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})
const startServer =()=>{
    const PORT = Config.PORT
    try{
        app.listen(PORT as string, ()=> console.log(`Server is running in port ${PORT}`));
    }catch(error){
        console.log("Error in starting server", error);
        process.exit(1);
    }
}
startServer();
