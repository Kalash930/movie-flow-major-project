import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noImage_2 from '/noImage_2.webp'

function TopNav() {
    const [query,setQuery]=useState("");
    const [searches,setSearches]=useState(null);
    const getSearches=async()=>{
        try{
            const {data}= await axios.get(`/search/multi?query=${query}`);
            
            setSearches(data.results);
           
           
           
        }
        catch(error){
            console.log(error);

        }
    };
    useEffect(()=>{
        getSearches();
    },[query])
   
  return (
    <div className='w-full h-[10vh] flex justify-center items-center relative'>
        <i className="ri-search-line text-2xl text-zinc-400"></i>
        <input
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
         className='w-[50%] p-2 mx-4 text-xl text-zinc-200 outline-none border-none bg-transparent' type="text" placeholder='search anything...' />
         {query.length>0&& <i onClick={()=>setQuery("")} className="ri-close-line text-2xl text-zinc-400"></i>}
      
        <div className='w-[50%] max-h-[70vh] bg-zinc-800 absolute z-50 transition-all duration-300 top-[97%] left-[25%] overflow-auto rounded'>
           {searches&&searches.map((s,i)=>(
             <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={i} className='w-[100%] hover:bg-black hover:text-white duration-200 font-semibold text-zinc-200  p-7 flex justify-start items-center border-b-2 border-zinc-600'>
            <img className='w-[12vh] h-[12vh] rounded mr-5 object-cover shadow-lg' src={
                (s.backdrop_path||s.profile_path)?
                `https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path}`:(noImage_2)} alt="" />
            <span>{s.original_name||s.name||s.title||s.original}</span>
            </Link>
           ))}
          {/*  <Link className='w-[100%] hover:bg-zinc-300 hover:text-black duration-200 font-semibold text-zinc-600  p-7 flex justify-start items-center border-b-2 border-zinc-100'>
            <img src="#" alt="" />
            <span>hello everyone</span>
            </Link>*/
}
          
        </div>
    </div>
  )
}

export default TopNav