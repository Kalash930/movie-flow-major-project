import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncLoadTv, removeTv } from '../store/actions/tvActions';
import HorizontalCards from '../templates/HorizontalCards'
import { Outlet } from "react-router-dom";
import Loading from './Loading';
import noImage_2 from '/noImage_2.webp'

function TvDetails() {
   document.title="MovieFlow || Tv Details"
   const { pathname } = useLocation();
   const {info}= useSelector((state)=>state.tv)
    const navigate =useNavigate();
    const {id}=useParams();
    const dispatch =useDispatch();
    useEffect(() => {
      dispatch(asyncLoadTv(id));
      return () => {
        dispatch(removeTv());
      };
    }, [id]);

  return info? (
    <div 
         style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    className="relative w-screen h-screen px-[10%] overflow-auto pb-10 ">

      {/*part 1 navigation completed */}
      <nav className='w-full text-zinc-100 flex gap-10 h-[10vh] items-center text-xl'>
         <Link
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></Link>
          <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
          <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}><i className="ri-earth-fill"></i></a>
          <a target='_blank' href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}>imdb</a>
          
      </nav>

      {/*part 2 poster and details */}
      <div className='w-full text-white flex'>
         <img
                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover  "
                    src={info.detail.poster_path || info.detail.backdrop_path  ? `https://image.tmdb.org/t/p/original/${
                      info.detail.poster_path || info.detail.backdrop_path
                    }` : noImage_2}
                    alt=""
         />
         <div className='content ml-[5%]'>
          <h1 className='text-5xl font-black'>
            {info.detail.name||info.detail.title||info.detail.original_name||info.detail.original_title}
             <small className='text-2xl font-bold text-zinc-400'>
           ({info.detail.first_air_date.split("-")[0]})
          </small>

          </h1>
          <div className='mt-3 flex items-center gap-x-5 mb-4'>
            <span className='bg-yellow-600 rounded-full w-[5vh] h-[5vh] text-white text-xl font-bold flex items-center justify-center'>
              {(info.detail.vote_average*10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className='text-3xl w-[60px] leading-6 font-semibold '>User Score</h1>
            <h1 className=''>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g,i)=>g.name).join(",")}</h1>
            <h1>{info.detail.runtime} min</h1>

          </div>
           <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className='mt-4 text-2xl text-zinc-100 mb-3'>Overview</h1>
          <p>{info.detail.overview}</p>
          <h1 className='mt-4 text-2xl text-zinc-100 mb-3'>tv Translated</h1>
          <p className='mb-10 leading-6'>{info.translations.join(" ,")}</p>
           <Link
            className=" p-5 bg-[#6556cd] rounded-lg hover:bg-[#372c85] "
            to={`${pathname}/trailer`}
          >
            {" "}
            <i className="text-xl mr-3 ri-play-fill"></i> Play Trailer
          </Link>
          
         

         </div>


      </div>
    <div className="w-[80%] flex flex-col gap-y-5 mt-10 ">
        {info.watchProviders && info.watchProviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Plateforms</h1>
            {info.watchProviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProviders && info.watchProviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchProviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProviders && info.watchProviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to Rent</h1>
            {info.watchProviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />

      <h1 className=" text-2xl font-bold text-white">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5 ">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div key={i} className="w-[15vh]   m-[6%]  ">
              <img
                
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[14vw] h-[30vh] object-cover  "
                src={s.poster_path?`https://image.tmdb.org/t/p/original/${s.poster_path}`:(noImage_2)}
                alt=""
              />
              <h1  className=" text-2xl text-zinc-200 mt-3  font-semibold">
                {
                  s.title ||
                  s.name ||
                  s.original_title}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl mt-5 text-white font-black text-center">
            Nothing to show
          </h1>
        )}

        {/* <HorizontalCards data={info.detail.seasons} /> */}
      </div>
       <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />
       
       <h1 className=" text-2xl font-bold mb-2 text-white">
        Recommendations & Similar stuff
      </h1>
      <HorizontalCards data={info.recommendations.length>0?info.recommendations:info.similar}/>
         <Outlet />

      

      
      


    </div>
  ):(<Loading/>)
}

export default TvDetails