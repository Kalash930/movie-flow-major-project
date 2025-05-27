import React from 'react'
import { Link } from 'react-router-dom';

function Header({data}) {
    
  return (
    <div
    style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: " top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    className='w-full h-[50vh]  flex flex-col justify-end  items-start p-[5%]'>
        <h1 className='text-2xl mb-1 w-[70%] text-white font-black'>{data.original_name||data.name||data.title||data.original}</h1>
        <p className=' w-[70%] text-zinc-100 mb-1'>{data.overview.slice(0,200)}{" "}.....{" "}<Link 
        to={`/${data.media_type}/details/${data.id}`}
         className='text-blue-400'>more</Link></p>
        <p className='text-zinc-300'>
            <i className="text-yellow-300 ri-megaphone-fill"></i> {data.release_date||"No Information"}
            <i className="text-yellow-300 ml-3 ri-clapperboard-fill"></i> {data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='bg-[#6556CD] block p-3 rounded-lg hover:bg-[#4c3ea9] hover:text-zinc-300 text-white font-semibold mt-2'><i className="text-xl mr-3 ri-play-fill"></i>Watch Trailer</Link>

    </div>
  )
}

export default Header