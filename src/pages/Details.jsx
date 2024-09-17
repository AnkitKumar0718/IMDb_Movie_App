import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../Features/getMovieDetails/detailApi";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetailData.movieDetailsList);
  const [currentMovieDetail, setMovie] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movieDetails) {
   setMovie(movieDetails); 
    }
  }, [movieDetails]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center text-white bg-[#121212]">
      <div className="w-full sm:w-4/5">
        <img
          className="w-full h-[300px] sm:h-[500px] object-cover object-[0_35%]"
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}
          alt="Backdrop"
        />
      </div>
      <div className="w-full sm:w-3/4 flex flex-col sm:flex-row absolute mt-20 sm:mt-80 px-4 sm:px-0">
        <div className="mr-0 sm:mr-8 mb-8 sm:mb-0">
          <div className="rounded-md shadow-lg">
            <img
              className="w-[120px] sm:w-[180px] rounded-lg shadow-[rgba(0,0,0,0.86)_0px_22px_40px_6px]"
              src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
              alt="Poster"
            />
          </div>
        </div>
        <div className="text-white flex md:bg-black rounded-xl p-2 md:bg-opacity-20 flex-col justify-between md:h-[260px] sm:h-[450px]">
          <div>
            <div className="text-2xl sm:text-4xl font-semibold mb-2">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="mb-2 text-sm sm:text-base">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="flex items-center mb-2 text-sm sm:text-base">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star ml-2" />
              <span className="ml-4">
                {currentMovieDetail ? `(${currentMovieDetail.vote_count} votes)` : ""}
              </span>
            </div>
            <div className="mb-2 text-sm sm:text-base">
              {currentMovieDetail ? `${currentMovieDetail.runtime} mins` : ""}
            </div>
            <div className="mb-4 text-sm sm:text-base">
              {currentMovieDetail ? `Release date: ${currentMovieDetail.release_date}` : ""}
            </div>
            <div className="flex space-x-2 sm:space-x-4 flex-wrap">
              {currentMovieDetail?.genres &&
                currentMovieDetail.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-2 sm:px-4 py-1 border-2 border-white rounded-full text-sm sm:text-base"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Updated Synopsis Section */}
      <div className="w-full bg-[#121212] mt-[160px] sm:mt-[90px] py-8 px-4">
        <div className="w-full sm:w-3/4 mx-auto">
          <div className="text-lg sm:text-xl md:mt-0 mt-2 font-semibold mb-4">Synopsis</div>
          <div className="text-sm sm:text-base md:mb-0">
            {currentMovieDetail ? currentMovieDetail.overview : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
