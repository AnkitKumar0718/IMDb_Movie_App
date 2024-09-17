import React, { useState, useEffect } from 'react';
import { fetchMovieList } from '../Features/getPopularMovie/movieApi';
import { useDispatch, useSelector } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
//bg-gradient-to-t from-black to-transparent

const Header = () => {
    const [list, setList] = useState([]);
    const dispatch = useDispatch();
    const movieData = useSelector((state) => state.movieData.movieList);

    useEffect(() => {
        dispatch(fetchMovieList());
    }, [dispatch]);

    useEffect(() => {
        if (movieData && movieData.length > 0) {
            setList(movieData);
        }
    }, [movieData]);

    if (list.length === 0) return <p className='text-white'>Loading....</p>;

    return (
        <Splide 
            options={{
                type: 'loop',
                perPage: 1, 
                gap: '1rem', 
                arrows: true, 
                pagination: false, 
                autoplay: true, 
                interval: 3000, 
                pauseOnHover: true, 
                resetProgress: false, 
                breakpoints: {
                    1024: {
                        perPage: 1, // Still one movie per view for tablets
                        gap: '1rem',
                    },
                    768: {
                        perPage: 1, // One movie per view for mobile
                        gap: '0.5rem', // Less gap on mobile
                    },
                },
            }}
        >
            {list.map((movie) => (
                <SplideSlide key={movie.id}>
                     <Link to={`/details/${movie.id}`}>
                    <div className='md:w-[80%] md:mx-28 w-full px- relative mt-2'>
                        <img 
                            className='w-full h-[450px] object-cover md:h-[500px] md:w-[1200px]' // Set a fixed height for images
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                            alt={movie.title}
                        />
                        {/* Content Box */}
                        <div className='absolute bg-black bg-opacity-40 bottom-0 left-0 right-0 p-4 md:p-8 '>
                            {/* Title */}
                            <h1 className='text-white font-bold text-[18px] md:text-[25px] mb-2'>{movie.title}</h1>
                            {/* Overview */}
                            <p className='text-white mb-4 w-full md:w-3/4'>{movie.overview}</p>
                            {/* Button */}
                            {/* <button className='bg-yellow-400 hover:bg-yellow-600 rounded-lg text-black px-4 py-2'>
                                Play
                            </button> */}
                          <div className='bg-white hover:bg-yellow-400 cursor-pointer rounded-full p-2 inline-flex items-center justify-center'>
                     <FaPlay className='text-black text-xl' />
                       </div>

                        </div>
                    </div>
                    </Link>
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default Header;

