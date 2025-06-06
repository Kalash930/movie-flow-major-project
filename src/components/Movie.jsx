import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from './Loading'
import TopNav from "../templates/TopNav";
import Dropdown from '../templates/Dropdown'
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../templates/Card'
import ScrollToTopButton from "./ScrollToTopButton";


function Movie() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MovieFlow || Movies" 


  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      // console.log(data);

      if (data.results.length > 0) {
        setMovie((preState) => [...preState, ...data.results]);
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
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full  flex items-center justify-start">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          Movie<small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[80%] ">
          <TopNav/>
          <Dropdown
            title="CATEGORY"
            options={["popular", "top_rated", "upcoming", 'now_playing' ]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%] "></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h1 >Loading...</h1>}
      >
        <Card data={movie} title="movie" />
      </InfiniteScroll>
      <ScrollToTopButton/>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie;