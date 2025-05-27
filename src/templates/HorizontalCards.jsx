import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import noImage_2 from '/noImage_2.webp'

function HorizontalCards({data}) {
  return (
   // <div className='w-full  p-5 h-[45vh]  '>
      
        <div className='w-[100%]  h-[45vh] px-4  overflow-y-hidden mb-5 flex'>
            {data.map((d,i)=>(
                <Link
                 to={`/${d.media_type}/details/${d.id}`}
                 key={i} className=' min-w-[18%] mb-2 rounded-t  shadow-md hover:shadow-[0_10px_20px_rgba(167,154,188,0.5)] transition-shadow duration-200 hover:scale-[1.02] mr-5 bg-zinc-900'>
                    <img
                       className='w-full rounded-t h-[45%] object-cover  mb-1'
                       src={ d.backdrop_path||d.poster_path?`https://image.tmdb.org/t/p/original/${d.backdrop_path||d.poster_path}`:(noImage_2)} 
                       alt="" 
                    />
                    <div className='h-[55%] p-3'>
                       <h1 className='text-lg mb-1   text-white font-black'>{d.original_name||d.name||d.title||d.original}</h1>
                        <p className='  leading-tight text-zinc-400 mb-3 mt-2 text-xs '>{d.overview.slice(0,70)}{" "}.....{" "}<span className='text-blue-400'>more</span></p>
                    </div>
                </Link>
            ))}

        </div>
     
//    </div>
  )
}

export default HorizontalCards