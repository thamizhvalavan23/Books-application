import mongoose, { connect } from "mongoose";


const Dataconnect = async()=> {
    await mongoose.connect(`${process.env.MONGO_URL}/Books-app`)

    try {
        console.log("connected database");
        
        
    } catch (error) {
        console.log("error connect");
        
        
    }
}


export default Dataconnect;