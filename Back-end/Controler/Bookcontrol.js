import jwt from "jsonwebtoken"

import { bookModel } from "../Database/User.js";

export const addbook = async (req, res) => {
    try {
        const { name, bio, price, category} = req.body;

        if (!name || !bio || !price || !category) {
            return res.send({ success: false, message: "Some details are missing." });
        }
        const book = new bookModel({ name, bio, price, category});

        await book.save();

        const token = jwt.sign({ id: book._id }, process.env.SEC_RET);

        return res.send({ success: true, message: "Book added successfully.", token });

    } catch (error) {
        console.log(error);
        return res.send({ success: false, message: "Error adding book." });
    }
};


export const allbooks = async(req,res)=> {
    try {

        const allbooklist = await bookModel.find()

        if (!allbooklist) {
            res.send({success:false,message:"finding error."})
            
        }

        const token = jwt.sign({id:allbooklist._id},process.env.SEC_RET)
        res.send({success:true,message:"all books" , allbooklist})
        
    } catch (error) {
        console.log(error);
        res.send({success:false,message:"finding error"})
        
        
    }
}