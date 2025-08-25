import mongoose from "mongoose"
export async function Connectdb(){
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("Database Connected Successfully")
    }
    catch(error){
        console.log("Database Connection Failed");
        process.exit(1);
    }
}