import React from 'react'
import notFound from '/noFound.gif'

function NotFound() {
   return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <img className='h-[50%] object-cover ' src={notFound} alt="" />
    </div>
  )
}

export default NotFound