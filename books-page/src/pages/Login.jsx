import React, { useState } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import { Appcontext } from '../context/Context';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState("");

  const navigate = useNavigate()

  const {token , setToken} = useContext(Appcontext)


  const [isLogin , setIsLogin] = useState("Register")

  const handlesubmite = async(event)=> {
    event.preventDefault();

    if (isLogin === "Register") {

      
      
          const {data} =await axios.post("https://books-application-1.onrender.com",{name,email,password})
      
          if (data.success) {
            localStorage.setItem("token" , data.token)
            setToken(data.token)
            console.log(token);
            navigate('/profile')
            
            toast.success(data.message)
      
            
          }else{
            console.log('error register');
            
          }
    }else{

    const {data} = await axios.post("https://books-application-1.onrender.com",{email,password},{headers:{token}})


    if (data.success) {
      
      toast.success(data.message)
      navigate('/profile')

    }else{
      console.log('error Login');
    }

  }
}


  return(
    <div>
        <form onSubmit={handlesubmite}>
      <div className='grid justify-center items-center w-full m-auto h-[60vh] shadow-lg rounded-md my-10'>

        <h1 className='text-2xl text-center text-blue-500'>{isLogin}_</h1>

        <div className='grid '>
          {
            isLogin === "Register" ?  <input  className='w-[400px] h-[40px] rounded-md border border-gray-700 mt-6 pl-3  '  type='text' placeholder='Name' name='name' value={name} onChange={(e)=> setName(e.target.value)} required autoComplete='off' /> : ""
          }
         
          <input className='w-[400px] h-[40px] rounded-md border border-gray-700 mt-6 pl-3  '  type='text' placeholder='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} required autoComplete='off' />
          <input  className='w-[400px] h-[40px] rounded-md border border-gray-700 mt-6 pl-3  ' type='password' placeholder='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} required autoComplete='off' />
        </div>

        <div className='flex justify-between'>
          <span className='text-md text-gray-600'><input type='checkbox' />  accept&condtion</span>

{
  isLogin === "Register" ? <p className='text-md text-gray-800'>Already have account? <span className='cursor-pointer text-blue-400' onClick={(e)=>setIsLogin("Login")}>Login</span></p> : <span className='cursor-pointer text-blue-400' onClick={()=>setIsLogin("Register")}>Create account</span>
}

        </div>


        <button className='rounded-lg p-1 w-[200px] mt-4 ml-30 bg-blue-500 h-[40px] text-white cursor-pointer' type='submit'>{isLogin}</button>

      </div>
</form>
      
    </div>
  )
}

export default Login
