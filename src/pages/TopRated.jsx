import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRated } from '../Features/getTopRated/topRatedApi';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopRated = () => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.topRatedData.topRatedList);

  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);

  useEffect(() => {
    if (topRatedMovies && topRatedMovies.length > 0) {
      setTopRatedMovie(topRatedMovies);
    }
  }, [topRatedMovies]);

  if (!topRatedMovies || topRatedMovies.length === 0) {
    return <p className='text-white'>Loading.....</p>;
  }

  return (
    <section className='bg-[#121212] mt-4'>
      <div className='flex mt-2 ml-4'>
        <div className="h-8 ml-2 mr-2 border-l-4 rounded mt-2 border-yellow-400 md:block"></div>
        <h1 className='text-2xl font-bold text-white mt-2 mb-6'>Top 10 on IMDb this week</h1>
      </div>
      {/* Splide Component for Movies Carousel */}
      <Splide
        options={{
          type: 'loop',
          perPage: 5,
          perMove: 1,
          gap: '1rem',
          swipe:true,
          drag: true,
          snap:true,
          arrows: true,
          pagination: false,
          autoplay: true,
          flickPower:500,
          breakpoints: {
            1280: {
              perPage: 4,
            },
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            640: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {topRatedMovie.map((movie) => (
          <SplideSlide key={movie.id}>
            <Card movie={movie} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default TopRated;
