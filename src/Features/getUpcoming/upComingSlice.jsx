import {createSlice} from '@reduxjs/toolkit';
import { fetchUpcoming } from './upcomingApi';

const initialState={
    upComingList:[],
    loading:false,
    error:null,
}

const upComingSlice=createSlice({
    name:'upComingMovies',
    initialState,
    reducers:{},
    extraReducers:((builder)=>{
      builder.addCase(fetchUpcoming.pending,(state,action)=>{
        state.loading=true;
        state.error=false;
      })
      .addCase(fetchUpcoming.fulfilled,(state,action)=>{
        state.upComingList=action.payload
        state.loading=false;
        state.error=false;
      })
      .addCase(fetchUpcoming.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message
      })
    })
})

export default upComingSlice.reducer