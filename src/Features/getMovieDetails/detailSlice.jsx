import {createSlice} from '@reduxjs/toolkit';
import { fetchMovieDetails } from './detailApi';
const initialState={
    movieDetailsList:[],
    loading:false,
    error:null,
}

const movieDetailSlice=createSlice({
    name:'movieDetails',
    initialState,
    reducers:{},
    extraReducers:((builder)=>{
      builder.addCase(fetchMovieDetails.pending,(state,action)=>{
        state.loading=true;
        state.error=false;
      })
      .addCase(fetchMovieDetails.fulfilled,(state,action)=>{
        state.movieDetailsList=action.payload
        state.loading=false;
        state.error=false;
      })
      .addCase(fetchMovieDetails.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message
      })
    })
})

export default movieDetailSlice.reducer