import React from 'react';
import './index.css'
import Navbar from './Components/navbar.jsx';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Cart from './pages/cart.jsx';
import About from './pages/about.jsx';
import Login from './pages/Login.jsx';
import Orderlist from './pages/Orderlist.jsx';
import Contact from './pages/contact.jsx';
import Footer from './Components/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import UserProfile from './pages/userProfile.jsx';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book/:id' element={<Books />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<UserProfile/>} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/orderlist' element={<Orderlist />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
