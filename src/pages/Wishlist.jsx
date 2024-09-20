import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useUserAuth } from '../context/UserAuthContext';
import Card from '../components/Card'; // Reuse the Card component to show movies

const Wishlist = () => {
  const { user } = useUserAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user) {
        const wishlistRef = collection(db, `users/${user.uid}/wishlist`);
        const querySnapshot = await getDocs(wishlistRef);
        const wishlistMovies = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setWishlist(wishlistMovies);
      }
    };

    fetchWishlist();
  }, [user]);

  if (!user) {
    return <p>Please sign in to view your wishlist</p>;
  }

  if (wishlist.length === 0) {
    return <p className='text-black font-bol text-[35px]'>Your wishlist is empty!</p>;
  }

  return (
    <div className='bg-[#121212] h-full'>
 <div className='flex ml-4'>
          <div className="h-8 ml-2 mr-2 border-l-4 rounded mt-2 border-yellow-400  md:block"></div>
        <h1 className='text-2xl font-bold text-white mt-2 mb-6'>Your Wishlist </h1>
        </div>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {wishlist.map(movie => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
    </div>
  );
};

export default Wishlist;
