import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from './Loading'
import TopNav from "../templates/TopNav";
import Dropdown from '../templates/Dropdown'
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../templates/Card'
import ScrollToTopButton from "./ScrollToTopButton";


function People() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MovieFlow || People" 


  const getPeople = async () => {
    try {
          const { data } = await axios.get(`/person/${category}?page=${page}`);

      // console.log(data);

      if (data.results.length > 0) {
        setPeople((preState) => [...preState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      // console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full  flex items-center ">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          People
        </h1>
        <div className="flex items-center justify-start w-[80%] ">
          <TopNav/>
        
         
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h1 >Loading...</h1>}
      >
        <Card data={people} title="person" />
      </InfiniteScroll>
      <ScrollToTopButton/>
    </div>
  ) : (
    <Loading />
  );
}

export default People;