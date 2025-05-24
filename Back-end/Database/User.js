import mongoose from "mongoose";

const userScheema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String , required:true}

})


export const userModel =  mongoose.models.user_List || mongoose.model("user_List" , userScheema)



const bookscheema = new mongoose.Schema({
    name:{type:String,required:true},
    bio:{type:String,required:true},
    price:{type:String , required:true},
    category:{type:String , required:true}
})


export const bookModel = mongoose.models.book_List || mongoose.model("book_List" , bookscheema)




