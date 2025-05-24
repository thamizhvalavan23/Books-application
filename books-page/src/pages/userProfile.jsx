import React, { useContext } from 'react'
import { Appcontext } from '../context/Context'
import { NavLink } from 'react-router-dom'

const UserProfile = () => {

  const {data , setToken} = useContext(Appcontext)
  return (
    <div>
     <div className='gird justify-center items-center w-full h-[50vh] m-auto'>
      <h1 className='flex text-3xl text-blue-300 m-auto  text-center justify-center items-center w-full my-14'>User_Details</h1>
      <div className='justify-center items-center w-full grid shadow-lg rounded-md p-5'>
        <p className='text-xl my-5'>Name : {data.name}</p>
        <p>Email : {data.email}</p>
       <NavLink to='/login'><button onClick={()=> setToken("")} className='w-[200px] h-[40px] bg-blue-400 my-10 text-white cursor-pointer p-2 rounded-md' type='submite'>Logout</button></NavLink>
      </div>
     </div>
    </div>
  )
}

export default UserProfile