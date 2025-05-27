import React, { useEffect, useState } from 'react'
import SideNav from '../templates/SideNav'
import TopNav from '../templates/TopNav'
import axios from '../utils/axios';
import Header from '../templates/Header';
import HorizontalCards from '../templates/HorizontalCards';
import Dropdown from '../templates/Dropdown';
import Loading from './Loading';

function Home() {
   const [wallpaper,setWallpaper]=useState(null);
    const [trending,setTrending]=useState(null);
     const [category, setCategory] = useState("all");
    const getWallpaper=async()=>{
        try{
            const {data}= await axios.get(`/trending/all/day`);
            const random=data.results[(Math.random()*data.results.length).toFixed()];
            setWallpaper(random)

           
           
           
        }
        catch(error){
            console.log(error);

        }
    };

      const getTrending=async()=>{
        try{
            const {data}= await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
           
           
           
        }
        catch(error){
            console.log(error);

        }
    };
   
    useEffect(()=>{
        getTrending();
       !wallpaper&&getWallpaper();
      

    },[category])
    
    document.title="MovieFlow || HomePage"
  return wallpaper && trending? (
    <>
   <SideNav/>
    <div className='w-[80%]  h-full overflow-auto overflow-x-hidden '>
      <TopNav/>
      <Header data={wallpaper}/>
      <div className='p-2 flex justify-between items-center'>
            <h1 className='text-2xl  font-semibold text-zinc-100'>Trending{" "}<small className='text-sm text-zinc-600'>({category})</small></h1>
            <Dropdown
            title="FILTER"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      <HorizontalCards data={trending}  />
    </div>
    </>
  ):<Loading/>
}

export default Home