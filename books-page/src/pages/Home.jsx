import React, { useEffect, useState } from 'react';
import { image ,category , books} from '../assets/assets.js';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Home = () => {

  const [bookdata , setBookdata] = useState([]);
  const [name , setName] = useState('')

  const datafetch = (e)=> {

    let datalist = books.slice();

    if (name) {

      datalist = datalist.filter(item=> item.name.toLowerCase().includes(name.toLowerCase()))
      setBookdata(datalist)

    }

    setBookdata(datalist);

  }


  useEffect(()=> {

    datafetch();
    console.log(name);
    

  },[name])





  return (
    <div className='mt-2'>
      <div className='bg-blue-500 flex justify-between w-full h-[50vh] p-2'>
        <div className='mt-12 ml-10'>
          <h1 className='text-5xl text-white font-serif'>Books is the best Frind</h1>
          <p className='mt-5 text-4xl text-white ml-5'>so choose your best frind !!!</p>
          <div>
            <button className='mt-10 ml-40 bg-white text-blue-500 w-[150px] font-bold h-[40px] rounded-md hover:translate-y-4' type='submit'>Explore Now</button>
          </div>
        </div>
        <div>
          <img className='w-[300px] h-[300px] mt-2 rounded-lg mr-20' src={image.favo} alt='banner-image' />

        </div>
      </div>
      <div className='my-7'>
        <div className='flex text-center justify-center items-center text-3xl text-blue-500'>
          <h1>Top books_category</h1>
        </div>
        <div className='flex justify-center items-center text-center'>
          {
            category.map((list,index)=> (
              <div key={index} className='mt-5'>
                <img className='w-[120px] rounded-full p-2 h-[120px] hover:translate-y-2 cursor-pointer bg-gray-200 hover:bg-blue-500' src={list.image} alt='image' />
                <p>{list.name}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex justify-center items-center text-center'>
          <h1 className='flex text-3xl'>All_<p className='text-blue-500 text-4xl'>books</p></h1>
        </div>

        <div className='flex justify-center items-center mt-6'>
          <input className='w-[400px] h-[40px] border border-gray-400 pl-3 rounded-md' type='text' placeholder='search' name='name' value={name} onChange={(e)=> setName(e.target.value)} required autoComplete='off' />
          <button className='w-[100px] h-[40px] bg-black text-white cursor-pointer rounded-md' type='submit'>Search</button>
        </div>

        <div className='flex mt-8 flex-wrap justify-center items-center m-2'>
          {
            bookdata.map((list , index)=> (
             <div key={index} className='m-3 justify-between items-center shadow-lg p-3 rounded-md hover:translate-y-4'>
              <Link to ={`/book/${list.id}`}><img  className='w-[200px] h-[200px] p-3 bg-blue-100  rounded-md' src={list.image} alt='image' /> </Link>
                <div className='mt-2'>
                  <p className='text-blue-500 text-lg'>{list.name}</p>
                  <div>
                    <p className='mt-2 text-green-500'>$ {list.price}</p>
                  </div>

                </div>
              </div>
            ))
            
          }
        </div>
        <div>

        </div>
      </div>

      <div className='flex justify-between h-[40vh] bg-blue-400 rounded-md mt-10'>
        <div>
          <h1 className='text-3xl grid h-full mt-28 w-full ml-5 text-white'>Your books is waiting for you!!!</h1>
        </div>
        <div>
          <img className='w-[200px] h-[200px] mt-5 mr-16' src={image.banner} alt='banner' />
        </div>

      </div>
      <div className='flex justify-center items-center text-center my-20'>
        <input className='w-[400px] h-[40px] pl-3 border-2 border-black rounded-md' type='text' placeholder='email'/>
        <button className='w-[150px] h-[40px] cursor-pointer text-white bg-black rounded-md' type='submit'>SUBSCRIBE</button>
      </div>

     
       
    </div>
  )
}

export default Home
