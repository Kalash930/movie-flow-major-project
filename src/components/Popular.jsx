import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "../templates/TopNav";
import Dropdown from '../templates/Dropdown';
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../templates/Card';
import ScrollToTopButton from "./ScrollToTopButton";

function Popular() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MovieFlow || Popular "


  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      // console.log(data);

      if (data.results.length > 0) {
        setPopular((preState) => [...preState, ...data.results]);
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
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full  flex items-center justify-start">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          Popular
        </h1>
        <div className="flex items-center w-[80%] ">
          <TopNav />
          <Dropdown
            title="Category"
            options={["movie", "tv" ]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%] "></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Card data={popular} title={category} />
      </InfiniteScroll>
      <ScrollToTopButton/>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;