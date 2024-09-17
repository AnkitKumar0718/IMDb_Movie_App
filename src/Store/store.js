import {configureStore} from '@reduxjs/toolkit';
import movieSlice from '../Features/getPopularMovie/movieSlice';
import upComingSlice from '../Features/getUpcoming/upComingSlice';
import topRatedSlice from '../Features/getTopRated/topRatedSlice'
import nowPlayingSlice from '../Features/getNowPlaying/nowPlayingSlice';
import movieDetailSlice from '../Features/getMovieDetails/detailSlice';
import searchSlice from '../Features/getSearch/searchSlice';

export const store=configureStore({
    reducer:{
      movieData:movieSlice,
      upComingData:upComingSlice,
      topRatedData:topRatedSlice,
      nowPlayingData:nowPlayingSlice,
      movieDetailData:movieDetailSlice,
      searchData:searchSlice,
    }
})
