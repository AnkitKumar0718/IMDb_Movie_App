import {createSlice} from '@reduxjs/toolkit';
import { fetchTopRated } from './topRatedApi';

const initialState={
    topRatedList:[],
    loading:false,
    error:null,
}

const topRatedSlice=createSlice({
    name:'topRatedMovies',
    initialState,
    reducers:{},
    extraReducers:((builder)=>{
      builder.addCase(fetchTopRated.pending,(state,action)=>{
        state.loading=true;
        state.error=false;
      })
      .addCase(fetchTopRated.fulfilled,(state,action)=>{
        state.topRatedList=action.payload
        state.loading=false;
        state.error=false;
      })
      .addCase(fetchTopRated.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message
      })
    })
})

export default topRatedSlice.reducer