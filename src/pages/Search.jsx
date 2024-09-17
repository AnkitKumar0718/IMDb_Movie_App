import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { fetchSearchMovie } from "../Features/getSearch/searchMovieApi";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar";

function Searched() {
  const dispatch = useDispatch();
  const searchedMovie = useSelector((state) => state.searchData.searchList);
  const loading = useSelector((state) => state.searchData.loading);
  const error = useSelector((state) => state.searchData.error);
  const { title } = useParams();

  // Fetch movies on title change
  useEffect(() => {
    if (title) {
      dispatch(fetchSearchMovie({ title }));
    }
  }, [dispatch, title]);

  return (
    <div className="bg-[#121212]">
    <Navbar/>
    <section className="md:px-8 md:my-4">
      <h1 className="md:text-4xl text-2xl ml-8 font-bold text-mono text-white">
        Search results for "{title}"
      </h1>

      {/* Show loading, error, or results */}
      {loading && <p className="text-white ml-8">Loading...</p>}
      {error && <p className="text-red-500 ml-8">Error: {error}</p>}
      {!loading && !error && searchedMovie.length === 0 && (
        <p className="text-white ml-8">No results found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-4">
        {searchedMovie.length > 0 &&
          searchedMovie.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
      </div>
    </section>
    </div>
  );
}

export default Searched;
