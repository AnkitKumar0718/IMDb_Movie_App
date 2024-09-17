import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNowPlaying = createAsyncThunk('fetchNowPlaying', async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6a5b9815240bdf170923e35d2626969c");
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
  