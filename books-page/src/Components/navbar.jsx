import React, { useContext, useState } from 'react'
import {image , books} from '../assets/assets.js'
import '../index.css';
import { NavLink } from 'react-router-dom';
import { Appcontext } from '../context/Context.jsx';
const Navbar = () => {

    const [click , setClick] = useState(false);

    const {token,data } = useContext(Appcontext)


  return (
    <div>
        <div className='flex justify-between items-center my-5'>
            <h1 className=' text-lg sm:text-2xl flex'>World_<p className='text-lg sm:text-3xl text-blue-500'>Books</p></h1>
            <div className='hidden sm:block'>
                <ul className='flex gap-7 text-lg cursor-pointer'>
            <NavLink to='/'><li className='text-center justify-center items-center  border-none'>Home</li></NavLink>
            <NavLink to='/contact'>   <li className='text-center justify-center items-center border-none'>Contact</li></NavLink>
            <NavLink to='/about'>   <li className='text-center justify-center items-center border-none'>About</li></NavLink>
                </ul>
            </div>
            <div className={`${click ? "block" : "hidden"} hidden z-10 sm:hidden relative left-36 top-20 bg-blue-500 p-2 rounded-sm`}>
                <ul className='grid gap-2 text-lg cursor-pointer text-start items-start justify-start'>
                <li className='text-start text-lg justify-start items-start cursor-pointer'>Home</li>
                <li className='text-start text-lg justify-start items-start cursor-pointer'>All-books</li>
                <li className='text-start text-lg justify-start items-start cursor-pointer'>Contact</li>
                <li className='text-start text-lg justify-start items-start cursor-pointer'>About</li>
                <span><i class="fa-solid fa-cart-shopping" id='cart'></i></span>
                <button className="w-[150px] h-[40px] text-white font-bold cursor-pointer rounded-md  bg-blue-500 " type='submit'>Create account</button>
                </ul>
            </div>
            <div className='gap-2 sm:gap-10 flex justify-center text-center items-center'>
                <span className='sm:hidden'><i class="fa-solid fa-bars"></i></span>
               <NavLink to='/cart'><span><i class="fa-solid fa-cart-shopping" id='cart'></i></span></NavLink>
               {
                token ? <div>
              <NavLink to='/profile'><button className="sm:block hidden sm:w-[150px] h-[40px] text-white font-bold cursor-pointer rounded-md bg-blue-500 " type='submit'>{data.name}</button></NavLink>
              </div>
              : 
              <div><NavLink to='/login'><button className="sm:block hidden sm:w-[150px] h-[40px] text-white font-bold cursor-pointer rounded-md bg-blue-500 " type='submit'>Create account</button></NavLink></div>
               }
            </div>
        </div>
        <hr  className='border border-gray-500'/>
      
    </div>
  )
}

export default Navbar
