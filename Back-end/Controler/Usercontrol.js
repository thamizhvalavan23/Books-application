import validator from 'validator';
import bcrypt from 'bcryptjs';
import { userModel } from '../Database/User.js';
import jwt from 'jsonwebtoken'


export const Register = async(req,res)=> {

    try {
        
        const {name , email , password} = req.body
    
        if (!name || !email || !password) {
    
             return res.send({success:false , message : "Some details missing"})
            
        }

        if (!validator.isEmail(email)) {
            return res.send({success:false , message : "Some details missing"})
            
        }
        const alreadyRegister = await userModel.findOne({email});

        const hasinghpassword = await bcrypt.hash(password,10)

        // check the email is already register

        if (alreadyRegister) {

            res.send({ success: false, message: "email already register." })

        } else {
            const users = { name, email, password:hasinghpassword};

            const user = new userModel(users);

            await user.save();
            const token = jwt.sign({id:user._id}, process.env.SEC_RET)
            res.send({ success: true, message: "Register successfully.", token })



        }



    } catch (error) {

        console.log(error);
        return res.send({success:false , message : "error"})
        
        
    }





}


export const authuser = async(req,res , next)=> {

    const {token} = req.headers;

    if (!token) {
        return res.send({success:false , message : "Token missing."})
        
    }

    const verifyToken = jwt.verify(token,process.env.SEC_RET);

    req.userId = verifyToken.id
    console.log(verifyToken);
    

     next()


}


export const Login = async(req,res)=> {

    try {

        const {email , password} = req.body

        const userId = req.userId;

        if (!email || !password) {
            return res.send({success:false , message : "Some details missing"})
            
        }

        const isemail = await userModel.find(userId);

        if (!isemail) {
            return res.send({success:false , message : "invalid email"})
            
        }

      //  const compare = await bcrypt.compare(password,isemail.password)

        const token = jwt.sign({id:isemail._id},process.env.SEC_RET)

        res.send({success:true , message : "Login successfully."})   
    } catch (error) {

        console.log(error);
        return res.send({success:false , message : "Error Login"})
        
    }
}

export const userlist = async (req, res) => {
    try {
        const userId = req.userId;

        const userDetails = await userModel.findById(userId).select('-password');

        if (!userDetails) {
            return res.send({ success: false, message: "User not found." }); // FIXED
        }

        const token = jwt.sign({ id: userDetails._id }, process.env.SEC_RET);

        return res.send({ success: true, message: "User info retrieved.", userDetails, token });

    } catch (error) {
        console.log(error);
        return res.send({ success: false, message: "Error fetching user info." });
    }
};

