import React, { useState } from 'react'

const Login = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState("");




  return (
    <div className='mt-20'>
      <div className='grid justify-center items-center w-full m-auto h-[60vh]'>
        <div className='grid '>
        <h1 className='text-2xl text-center text-blue-500'>Admin_Login</h1>
          <input className='w-[400px] h-[40px] rounded-md border border-gray-700 mt-6 pl-3  '  type='text' placeholder='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} required autoComplete='off' />
          <input  className='w-[400px] h-[40px] rounded-md border border-gray-700 mt-6 pl-3  ' type='password' placeholder='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} required autoComplete='off' />
        <button className='rounded-lg mt-10 p-1 w-[200px] m-auto flex w-[200px] bg-blue-500 h-[40px] text-white cursor-pointer justify-center' type='submit'>Login</button>
        </div>
        </div>


      </div>
  )
}

export default Login
