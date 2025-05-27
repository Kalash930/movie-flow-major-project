

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TVshow from './components/TVshow'
import People from './components/People'
import About from './components/About'
import Contact from './components/Contact'
import MovieDetails from './components/MovieDetails'
import PersonDetails from './components/PersonDetails'
import TvDetails from './components/TvDetails'
import Trailer from './templates/Trailer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
   const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-black  w-screen h-screen flex'>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
       
        
        <Route path='/tv' element={<TVshow/>} />
         <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
       
        
        <Route path='/person' element={<People/>}/>
        <Route path='/person/details/:id' element={<PersonDetails/>} />
       
        
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
    </div>
  )
}

export default App



