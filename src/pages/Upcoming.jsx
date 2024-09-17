import React, { useEffect, useState } from 'react';
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcoming } from '../Features/getUpcoming/upcomingApi';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Upcoming = () => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.upComingData.upComingList);

  useEffect(() => {
    dispatch(fetchUpcoming());
  }, [dispatch]);

  useEffect(() => {
    if (upcomingMovies && upcomingMovies.length > 0) {
      setUpcomingMovie(upcomingMovies);
    }
  }, [upcomingMovies]);

  if (!upcomingMovies || upcomingMovies.length === 0) {
    return <p className='text-white'>Loading.....</p>;
  }

  return (
    <section className='bg-[#121212] mt-4'>
      <div className='flex mt-4 ml-4'>
          <div className="h-8 ml-2 mr-2 border-l-4 rounded mt-2 border-yellow-400 md:block"></div>
        <h1 className='text-2xl font-bold text-white mt-2 mb-6'>Upcoming</h1>
        </div>
      {/* Splide Component for Movies Carousel */}
      <Splide
        options={{
          type: 'loop',
          perPage: 4,  // Show 4 movies side by side on large screens
          perMove: 1,
          gap: '1rem',
          arrows: true,
          pagination: false,
          autoplay: true,
          breakpoints: {
            1024: {
              perPage: 3,  // Show 3 movies side by side on medium screens
            },
            768: {
              perPage: 2,  // Show 2 movies side by side on small screens
            },
            640: {
              perPage: 1,  // Show 1 movie side by side on very small screens
            },
          },
        }}
      >
        {upcomingMovie.map((movie) => (
          <SplideSlide key={movie.id}>
            <Card movie={movie} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Upcoming;
