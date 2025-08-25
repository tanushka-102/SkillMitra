import {app} from "./app.js";
import dotenv from "dotenv"
import { Connectdb } from "./db/connection.js";

dotenv.config()
const PORT=process.env.PORT||5000

Connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log("Database Connection failed",error);
})

app.get('/',(req,res)=>{
    res.send('hello world')
})


