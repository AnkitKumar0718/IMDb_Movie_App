import {createSlice} from '@reduxjs/toolkit';
import { fetchNowPlaying } from './nowPlayingApi';

const initialState={
    nowPlayingList:[],
    loading:false,
    error:null,
}

const nowPlayingSlice=createSlice({
    name:'nowPlayingMovies',
    initialState,
    reducers:{},
    extraReducers:((builder)=>{
      builder.addCase(fetchNowPlaying.pending,(state,action)=>{
        state.loading=true;
        state.error=false;
      })
      .addCase(fetchNowPlaying.fulfilled,(state,action)=>{
        state.nowPlayingList=action.payload
        state.loading=false;
        state.error=false;
      })
      .addCase(fetchNowPlaying.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message
      })
    })
})

export default nowPlayingSlice.reducer