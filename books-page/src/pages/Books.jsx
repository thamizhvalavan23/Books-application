import React, { useContext, useEffect, useState } from 'react';
import { books } from '../assets/assets.js';
import { useParams , Link } from 'react-router-dom';
import { Appcontext } from '../context/Context.jsx';

const Books = () => {
  const [bookdetails, setBookdetails] = useState({});
  const { id } = useParams();
  const [relate , setRelate] = useState([])


  const {addTocart , cartitem} = useContext(Appcontext)


  const toprelative = (e)=> {
    if (bookdetails) {

      let data = books.slice();

      data = data.filter(list => list.category === bookdetails.category);

      setRelate(data)
      
    }
  }

  useEffect(()=> {
    toprelative() 

  },[bookdetails])



  useEffect(() => {
    const alldata = () => {
      const found = books.find((list) => list.id === parseInt(id)); // ✅ parse id
      if (found) {
        setBookdetails(found);
      }
    };

    alldata();
  }, [id]);


  return (
    <div>
      <div>
        <h1 className='my-8 text-3xl text-blue-400'>Book_details</h1>
        <div className='flex justify-around gap-3'>
          <div>
            <img className='w-[300px] h-[300px] ml-5 rounded-md p-3 shadow-lg' src={bookdetails.image} alt='image' />
          </div>
          <div className='text-start'>
            <p className='text-4xl text-blue-400'>Name: {bookdetails.name}</p>
            <h1 className='mt-5 text-xl text-gray-300'>Bio:{bookdetails.bio}</h1>
            <h1 className='mt-5 text-red-500 text-2xl'>price: $ {bookdetails.price}</h1>
            <button onClick={()=>addTocart(bookdetails.id , bookdetails.name, bookdetails.image)} className='w-[200px] h-[40px] text-white bg-black cursor-pointer rounded-md p-2 ml-20 mt-10' type='submit'>Add to Cart</button>
          </div>
        </div>
      </div>
      <div>
        <div className='flex mt-10 justify-center items-center'>
          <h1 className='text-red-500 text-3xl'>Relative_books</h1>
          </div>
          <hr className='mt-5 border border-gray-300'/>

          <div className='flex mt-8 flex-wrap justify-center items-center m-2'>
          {
            relate.map((list , index)=> (
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

        </div>
        <div>

          <h1>{cartitem.id}</h1>
          <p>cart</p>

        </div>
      </div>
  );
};

export default Books;
