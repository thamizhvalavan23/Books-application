import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' bg-blue-100 h-[90vh] mt-1 ml-2'>
        <div className='w-[300px] grid'>
          <NavLink to='/'><button className='w-[200px] h-[40px] cursor-pointer m-5 rounded-md bg-blue-500 text-white'  type='submit'>Dashboard</button> </NavLink>
         <NavLink to='/add'><button className='w-[200px] h-[40px] cursor-pointer m-5 rounded-md bg-blue-500 text-white' type='submit'>Add-Books</button></NavLink>
        </div>
        <hr />
    </div>
  )
}

export default Sidebar
