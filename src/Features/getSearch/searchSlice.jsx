import {createSlice} from '@reduxjs/toolkit';
import { fetchSearchMovie } from './searchMovieApi';

const initialState={
    searchList:[],
    loading:false,
    error:null,
}

const searchMovieSlice=createSlice({
    name:'searchedMovies',
    initialState,
    reducers:{},
    extraReducers:((builder)=>{
      builder.addCase(fetchSearchMovie.pending,(state,action)=>{
        state.loading=true;
        state.error=false;
      })
      .addCase(fetchSearchMovie.fulfilled,(state,action)=>{
        state.searchList=action.payload
        state.loading=false;
        state.error=false;
      })
      .addCase(fetchSearchMovie.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message
      })
    })
})

export default searchMovieSlice.reducer