import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchMovieList=createAsyncThunk('fetchMoviesList',
    async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6a5b9815240bdf170923e35d2626969c')
        const data= await response.json();
        return data.results;
    }
)