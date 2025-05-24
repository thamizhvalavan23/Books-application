import React from 'react'
import Login from './Componets/Login'
import Navbar from './Componets/Navbar'
import Sidebar from './Componets/Sidebar'
import {Routes , Route} from 'react-router-dom'
import Dashboard from './page/Dashboard.jsx'
import Addbook from './page/Addbook.jsx'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className='flex flex-start'>
      <Sidebar />
      <div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/add' element={<Addbook />} />
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default App