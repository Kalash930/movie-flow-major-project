import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
     <div className='w-[20%] h-full border-r-2 border-zinc-200 p-3'>
        <h1 className='flex items-center'>
           <svg className='w-[20px] h-[25px] inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(101,86,205,1)"><path d="M15.4142 4.99998H21.0082C21.556 4.99998 22 5.44461 22 6.00085V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5553 2 19.9991V6.00085C2 5.44808 2.45531 4.99998 2.9918 4.99998H8.58579L6.05025 2.46445L7.46447 1.05023L11.4142 4.99998H12.5858L16.5355 1.05023L17.9497 2.46445L15.4142 4.99998Z"></path></svg>
           
           <span className='text-white text-xl font-bold ml-2'>Movie App</span>
        </h1>
        <nav className='flex flex-col gap-3 text-zinc-400 text-xl'>
            <h1 className='text-white text-xl font-semibold mt-10 mb-3'>New Feeds</h1>
            <Link to='/trending' className='hover:bg-[#6556cd] duration-300 hover:text-white rounded-md p-2'>
               < i className="ri-fire-fill"></i>Trending</Link>
             <Link to='/popular' className='hover:bg-[#6556cd] duration-300 hover:text-white rounded-md p-2'>
             <i className="ri-bard-fill"></i> Popular</Link>
              <Link to='/movie' className='hover:bg-[#6556cd] duration-300 hover:text-white rounded-md p-2'>
              <i className="ri-movie-fill"></i> Movies</Link>
               <Link to='/tv' className='hover:bg-[#6556cd] duration-300 hover:text-white rounded-md p-2'>
               <i className="ri-tv-line"></i> TV Shows</Link>
                <Link to='/person' className='hover:bg-[#6556cd] duration-300 hover:text-white rounded-md mb-2 p-2'>
                <i className="ri-group-fill"></i> People</Link>

        </nav>
        <hr  className='mt-2 bg-zinc-400 border-none h-[1px] '/>
         <nav className='flex flex-col gap-3 text-zinc-400 text-xl'>
          
            <Link to='/about' className='hover:bg-[#6556cd] duration-300 hover:text-white mt-2 rounded-md p-2'>
            <i className="ri-user-community-fill"></i> About</Link>
             <Link to='/contact' className='hover:bg-[#6556cd] duration-300 hover:text-white rounded-md p-2'>
          <i className="ri-phone-line"></i>  Contact Us</Link>
             
        </nav>
     </div>
  )
}

export default SideNav