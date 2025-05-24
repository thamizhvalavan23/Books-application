import express from 'express';
import upload from '../Controler/multer.js';
import { authuser, Login, Register, userlist } from '../Controler/Usercontrol.js';
import { addbook, allbooks } from '../Controler/Bookcontrol.js';

const Approuter = express.Router();


Approuter.post('/register' , upload.none(),Register)
Approuter.post('/login',upload.none(),authuser,Login);
Approuter.get('/get',authuser,userlist)


Approuter.post('/add',upload.none(),addbook);
Approuter.get('/allbook',allbooks)


export default Approuter