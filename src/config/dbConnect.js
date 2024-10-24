import mongoose from "mongoose";

async function conectaNaDataBase(){
    mongoose.connect('mongodb://localhost:27017/');
    return mongoose.connection;
}

export default conectaNaDataBase;


