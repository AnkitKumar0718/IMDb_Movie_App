import React, { useState } from 'react';
import Imdb_logo from '../assets/IMDB_Logo.png';
import { IoSearchOutline } from 'react-icons/io5';
import { BiSolidBookmarkPlus } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'; // Alias React Router's Link as RouterLink
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State to handle the dropdown menu
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    if(searchQuery.trim()){
    navigate(`/search/${searchQuery}`) 
    }
    else{
      navigate('/')
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu on and off
  };

  return (
    <nav className='flex items-center w-full bg-[#121212] h-16 px-4 md:gap-4'>
      {/* Logo */}
      <RouterLink to='/'>
      <div>
        <img className='md:w-16 md:h-8 w-[100px] h-8 cursor-pointer' src={Imdb_logo} alt='IMDB Logo' />
      </div>
      </RouterLink>
      {/* Menu Button */}
      <div className='relative'>
        <div className='flex items-center gap-2 ml-2 hover:bg-[#242424] cursor-pointer py-1 px-2' onClick={toggleMenu}>
          <button className='text-white focus:outline-none hover:text-gray-400'>
            <i className='fa fa-solid fa-bars'></i>
          </button>
          <p className='text-white font-bold'>Menu</p>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className='absolute top-12 left-0 bg-[#242424] rounded shadow-lg z-10 py-2'>
            <ScrollLink
              to='top-rated'
              smooth={true}
              duration={500}
              className='block px-4 py-2 text-white cursor-pointer hover:bg-gray-600'
              onClick={toggleMenu}
            >
              Top Rated
            </ScrollLink>
            <ScrollLink
              to='upcoming'
              smooth={true}
              duration={500}
              className='block px-4 py-2 text-white cursor-pointer hover:bg-gray-600'
              onClick={toggleMenu}
            >
              Upcoming
            </ScrollLink>
            <ScrollLink
              to='fans-favourite'
              smooth={true}
              duration={500}
              className='block px-4 py-2 text-white cursor-pointer hover:bg-gray-600'
              onClick={toggleMenu}
            >
              Fan's Favourite
            </ScrollLink>
            <RouterLink to='/signup' className='block px-4 py-2 text-white cursor-pointer hover:bg-gray-600' onClick={toggleMenu}>
              Signup
            </RouterLink>
            <RouterLink to='/login' className='block px-4 py-2 text-white cursor-pointer hover:bg-gray-600' onClick={toggleMenu}>
              Login
            </RouterLink>
          </div>
        )}
      </div>

      {/* Search Box */}
      <form className='flex ml-4 relative flex-grow' onSubmit={search}>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className='h-9 w-full md:w-[700px] pl-4 pr-10 rounded bg-white border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:outline-none'
          placeholder='Search IMDB'
        />
        <button type='submit'>
          <div className='absolute inset-y-0 right-0 flex items-center cursor-pointer pl-'>
            <IoSearchOutline className='md:text-gray-500 md:mr-8 mr-2 text-gray-500 w-6' size={30} />
          </div>
        </button>
      </form>

      {/* Vertical Divider (Only visible on medium screens and above) */}
      <div className='h-10 ml-2 mr-2 border-l border-gray-600 hidden md:block'></div>

      {/* Bookmarks (Only visible on medium screens and above) */}
      <RouterLink to='/signup'>
      <div className='hidden md:flex gap-1 hover:bg-[#242424] cursor-pointer py-2 px-2'>
        <BiSolidBookmarkPlus className='text-white h-6 w-6 ' />
        <p className='text-white font-bold'>Watchlist</p>
      </div>
      </RouterLink>

      {/* Sign In and Log In (Only visible on medium screens and above) */}
      <RouterLink to='/signup'>
        <p className='hidden md:block text-white font-bold hover:bg-[#242424] cursor-pointer py-2 px-2'>Sign In</p>
      </RouterLink>
      <RouterLink to='/login'>
        <p className='hidden md:block text-white font-bold hover:bg-[#242424] cursor-pointer py-2 px-2'>Log In</p>
      </RouterLink>
    </nav>
  );
};

export default Navbar;
