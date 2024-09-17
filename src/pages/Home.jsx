import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Upcoming from './Upcoming';
import TopRated from './TopRated';
import NowPLaying from './NowPlaying';
import Footer from './Footer';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div className='bg-[#121212]'>
        <Navbar/>
    <Header/>
    <Element name='upcoming'>
    <Upcoming/>
    </Element>
    <Element name='top-rated'>
    <TopRated/>
    </Element>
    <Element name='fans-favourite'>
    <NowPLaying/>
    </Element>
    <Footer/>
    </div>
  )
}

export default Home
