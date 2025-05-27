import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from './Loading'
import TopNav from "../templates/TopNav";
import Dropdown from '../templates/Dropdown'
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../templates/Card'
import Cards from "../templates/Card";
import ScrollToTopButton from "./ScrollToTopButton";

function TVshow() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [tvShow, setTvShow] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MovieFlow || Tvshows" 


  const getTvShow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      // console.log(data);

      if (data.results.length > 0) {
        setTvShow((preState) => [...preState, ...data.results]);
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
    if (tvShow.length === 0) {
      getTvShow();
    } else {
      setPage(1);
      setTvShow([]);
      getTvShow();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvShow.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full  flex items-center justify-start">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          TV Shows<small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[80%] ">
          <TopNav/>
          <Dropdown
            title="CATEGORY"
             options={["on_the_air", "top_rated", "popular", 'airing_today' ]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%] "></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvShow.length}
        next={getTvShow}
        hasMore={hasMore}
        loader={<h1 >Loading...</h1>}
      >
        <Cards data={tvShow} title="tv" />
      </InfiniteScroll>
      <ScrollToTopButton/>
    </div>
  ) : (
    <Loading />
  );
}

export default TVshow;