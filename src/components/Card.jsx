import React from 'react';
import { FaPlay } from "react-icons/fa";    
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore
import { getDoc } from 'firebase/firestore';


const Card = ({ movie }) => {

  let {user}=useUserAuth();
  const navigate=useNavigate();
  async function toggleWishlist(){
    console.log(user);
    if(!user){
      navigate('/signup')
      return;
    }
    
    const movieRef = doc(db, `users/${user.uid}/wishlist`, movie.id.toString());
    
    try {
      // Check if movie is already in wishlist (you'll need a function to check this)
      const movieInWishlist = await isMovieInWishlist(movie.id);
      
      if (movieInWishlist) {
        // Remove from wishlist
        await deleteDoc(movieRef);
        alert('Removed from wishlist');
      } else {
        // Add to wishlist
        await setDoc(movieRef, {
          title: movie.title,
          poster_path: movie.poster_path,
          id: movie.id
        });
        alert('Added to wishlist');
      }
    } catch (error) {
      console.error('Error updating wishlist: ', error);
    }
  }
  const isMovieInWishlist = async (movieId) => {
    const docRef = doc(db, `users/${user.uid}/wishlist`, movieId.toString());
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  };

  return (
    <div className='relative group ml-10 md:ml-0 h-[320px] w-[280px] md:h-[400px] md:w-full rounded-lg overflow-hidden mb-4'>
      {/* Movie Thumbnail */}
      <img
        className='w-full h-full object-cove rounded-lg md:transition-transform md:duration-300 md:ease-in-out md:group-hover:scale-105' 
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt='Movie Thumbnail'
      />

      {/* Bookmark Icon with its own Link, and a higher z-index */}
      {/* <Link to='/signup'> */}
        <div onClick={toggleWishlist} className='absolute top-0 left-0 cursor-pointer p-2 z-10'>
          <BiSolidBookmarkPlus className='text-white h-8 w-8' />
        </div>
      {/* </Link> */}

      {/* Play Icon Wrapper with its own Link */}
      <Link to={`/details/${movie.id}`}>
        {/* Overlay that fits exactly to the image */}
        <div className='absolute inset-0 flex items-center justify-center md:bg-black md:bg-opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300'>
          <div className='bg-yellow-400 rounded-full md:p-4 p-2 cursor-pointer'>
            <FaPlay className='text-black text-xl' />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
