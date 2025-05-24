import React, { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'

const Addbook = () => {

  const [name , setName] = useState("");
  const[bio , setBio] = useState("")
  const [price , setPrice] = useState("");
  const[category, setCategory] = useState("")

  const handlesubmite = async(event)=> {

    event.preventDefault();

    try {

      const {data} = await axios.post("https://books-application-1.onrender.com",{name,bio,price,category})

      if (data.success) {

        toast.success(data.message)
        setBio("")
        setCategory("")
        setName("")
        setPrice("")
        
      }else{
        console.log("error else");
        
      }
      
    } catch (error) {
      console.log(error);
      
      
    }

  }

  return (
    <div>
      <div className='justify-center items-center flex  ml-60 w-full'>
        <form onSubmit={handlesubmite} className='flex justify-center items-center m-auto'>
          <div className='text-center justify-center items-center mt-16'>
            <h1 className='text-3xl text-blue-400'>ADD_books</h1>
            <div className='grid'>
              <input className='pl-3 h-[40px] border border-gray-700 rounded-md w-[400px] mt-7' type='text' name='name' value={name} placeholder='Name' onChange={(e)=> setName(e.target.value)} required autoComplete='off' />
              <input className='pl-3 h-[40px] border border-gray-700 rounded-md w-[400px] mt-7' type='text' name='bio' value={bio} placeholder='bio' onChange={(e)=>setBio(e.target.value)} required autoComplete='off' />
              <input className='pl-3 h-[40px] border border-gray-700 rounded-md w-[400px] mt-7' type='text' name='price' value={price} placeholder='price' onChange={(e)=> setPrice(e.target.value)} required autoComplete='off' />
              <input className='pl-3 h-[40px] border border-gray-700 rounded-md w-[400px] mt-7' type='text' name='category' value={category} placeholder='category' onChange={(e)=> setCategory(e.target.value)} required autoComplete='off' />
            </div>
            <div>
              <button className='w-[200px] h-[40px] bg-blue-500 text-white rounded-md mt-7' type='submit'>Add-books</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Addbook
