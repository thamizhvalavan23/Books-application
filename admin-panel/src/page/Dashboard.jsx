import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {

  const [bookpdf,setBookpdf] = useState([]);

  const bookdata = async()=>{
    try {

      const {data} = await axios.get("https://books-application-1.onrender.com"),{})

      if (data.success) {

        setBookpdf(data.allbooklist)
        console.log('good');
        
        
      }else{
        console.log("else error");
        
      }
      console.log(bookpdf);
      
      
    } catch (error) {
      console.log(error);
      
      
    }
    


    
  }
  useEffect(()=> {

    bookdata()

    console.log(bookpdf);
    

  },[])

  return (
    <div>
      <div className='flex mt-8 flex-wrap justify-center items-center m-2'>
          {
            bookpdf.map((list , index)=> (
             <div key={index} className='m-3 justify-between items-center shadow-lg p-3 rounded-md hover:translate-y-4'>
              <img  className='w-[200px] h-[200px] p-3 bg-blue-100  rounded-md' src={list.image} alt='image' />
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
  )
}

export default Dashboard
