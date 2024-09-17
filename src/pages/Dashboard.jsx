import React from 'react'
import Navbar2 from '../components/Navbar2';
import Header from '../components/Header';
import Upcoming from './Upcoming';
import TopRated from './TopRated';
import NowPLaying from './NowPlaying';
import Footer from './Footer';
import { Element } from 'react-scroll';

const Dashboard = () => {
  return (
    <div className='bg-[#121212]'>
        <Navbar2/>
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

export default Dashboard
