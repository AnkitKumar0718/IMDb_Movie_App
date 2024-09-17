import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchMovie = createAsyncThunk('fetchSearchMoviea', async ({title}) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6a5b9815240bdf170923e35d2626969c&language=en-US&query=${title}&page=1&include_adult=false`);
      const data = await response.json();
      if (response.ok) {
        return data.results;
      } else {
        throw new Error(data.status_message || 'Failed to fetch');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  });
  