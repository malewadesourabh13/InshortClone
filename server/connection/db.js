import mongoose from "mongoose";

const Connection = async () => {
    try{
        const URL = `mongodb://admin:admin123@clone-inshorts-shard-00-00.arsda.mongodb.net:27017,clone-inshorts-shard-00-01.arsda.mongodb.net:27017,clone-inshorts-shard-00-02.arsda.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-yrln3i-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewURLParser : true });
        console.log(`Database connected successfully`);
    }catch(error) {
        console.log(`Error while connecting to the database`, error);
    }
    //mongoose has a function connect which takes 2 arguments, 1st argument is the URL and 2nd 
    //argument is an object
}

export default Connection;