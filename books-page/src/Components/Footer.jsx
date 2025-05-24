import React from 'react'

const Footer = () => {
  return (
    <div>
            <div className='flex justify-between items-center my-10'>
        <div className='w-[400px]'>
          <h1 className='text-lg text-black font-bold'>books_World</h1>
          <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
          <h1 className='text-lg text-black font-bold'>comapny</h1>
          <ul>
            <li className='text-gray-400'>Home</li>
            <li className='text-gray-400'>about us</li>
            <li className='text-gray-400'>contact</li>
            <li className='text-gray-400'>privacy policy</li>
          </ul>
        </div>
        <div>
          <h1 className='text-lg text-black font-bold'>GET IN TOUCH</h1>
          <p className='text-gray-400'>+0-000-000-000</p>
          <p className='text-gray-400'>appusingh423@gmail.com</p>

        </div>
      </div> 
      <hr className='border border-gray-400 my-4' />     
    </div>
  )
}

export default Footer
