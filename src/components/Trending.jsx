
/*
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import TopNav from '../templates/TopNav';
import Dropdown from '../templates/Dropdown';
import axios from '../utils/axios';
import Card from '../templates/Card';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";


function Trending() {
    const navigate = useNavigate();
    const [category,setCategory]=useState("all");
    const [duration, setDuration]=useState("day");
    const [trending,setTrending]= useState(null);

     const getTrending=async()=>{
        try{
            const {data}= await axios.get(`/trending/${category}/${duration}`);
            setTrending(data.results);
              if (data.results.length > 0) {
        setTrending((preState) => [...preState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
           
           
           
        }
        catch(error){
            console.log(error);

        }
    };
    useEffect(()=>{
        getTrending();
    },[category,duration]);
    console.log(trending);
   
  return (trending.length) > 0?(
    <div className='w-screen overflow-hidden overflow-y-auto h-screen'>
        <div className='w-full h-[10vh] px-[5%]  flex items-center'>
           
            
            <h1 className='text-zinc-400  text-2xl flex justify-center items-center font-semibold'>
               <i onClick={()=>navigate(-1)} className="hover:text-[#6556cd]  ri-arrow-left-line"></i> Trending</h1>
               <TopNav/>
               <Dropdown
            title="Category"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className='w-[2%]'></div>
            <Dropdown
            title="Duration"
            options={["Week", "Day"]}
            func={(e) => setDuration(e.target.value)}
            
          />
        </div>
       <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Card data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ):<Loading/>
}

export default Trending
*/

/*
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../templates/TopNav';
import Dropdown from '../templates/Dropdown';
import axios from '../utils/axios';
import Card from '../templates/Card';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
  const navigate = useNavigate();

  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('day');
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch trending data
  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log('Axios Error:', error.response?.data || error.message);
      setHasMore(false);
    }
  };

  // Reset when category or duration changes
  useEffect(() => {
    setTrending([]);
    setPage(1);
    setHasMore(true);
  }, [category, duration]);

  // Fetch first page separately after reset
  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen overflow-hidden overflow-y-auto h-screen">
      <div className="w-full h-[10vh] px-[5%] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] text-zinc-400 text-2xl ri-arrow-left-line cursor-pointer"
          ></i>
          <h1 className="text-zinc-400 text-2xl font-semibold">Trending</h1>
        </div>
        <TopNav />
        <Dropdown
          title="Category"
          options={['tv', 'movie', 'all']}
          func={(e) => setCategory(e.target.value.toLowerCase())}
        />
        <Dropdown
          title="Duration"
          options={['week', 'day']}
          func={(e) => setDuration(e.target.value.toLowerCase())}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1 className="text-center my-4">Loading...</h1>}
        endMessage={
          <p className="text-center text-zinc-500 my-4">No more results.</p>
        }
      >
        <Card data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;


*/

import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from '../templates/Dropdown'
import axios from "../utils/axios";
import Card from '../templates/Card'
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "../templates/TopNav";
import ScrollToTopButton from "./ScrollToTopButton";

function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MovieFlow || Trending "

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
         `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrending((preState) => [...preState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full mb-5  flex items-center ">
        <h1 className=" text-2xl  font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          Trending<small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center justify-between  w-[80%] ">
          <TopNav  />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%] "></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
       loader={<h1>Loading...</h1>}
      >
        <Card data={trending} title={category} />
      </InfiniteScroll>
      <ScrollToTopButton/>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
