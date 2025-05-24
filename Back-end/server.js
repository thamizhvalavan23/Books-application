import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import Dataconnect from './Database/Data.js';
import Approuter from './Adminrouter/AdminRouter.js';


// creating app

const app = express();
const port = process.env.PORT || 4000

// creating json formate

app.use(express.json());
app.use(cors())

Dataconnect()

app.use('/api/admin',Approuter)

// creating API end point

app.get('/' , (req,res)=> {
    res.send("Appi working.")
    res.end()
})

//Running on localhost

app.listen(port , console.log("Server ruuing.")
)