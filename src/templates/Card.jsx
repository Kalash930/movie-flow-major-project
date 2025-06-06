import React from "react";
import { Link } from "react-router-dom";
import noImage_2 from "/noImage_2.webp";
function Card({ data, title }) {
  console.log(title);

  
  
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-black ">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type||title}/details/${c.id}`}
          
          className="relative w-[25vh] mr-[5%] mb-[5%] "
          key={i}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(255,255,255,0.2)] h-[40vh] object-cover  "
            src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }` : noImage_2}
            alt=""
          />
          <h1 className=" text-2xl text-zinc-200 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] bg-yellow-600 text-xl font-semibold rounded-full text-white w-[5vh] h-[5vh] flex justify-center items-center ">
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Card;