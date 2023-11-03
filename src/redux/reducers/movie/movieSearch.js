import { createSlice } from "@reduxjs/toolkit";

const movieSearch = createSlice({
    name: "Movie Search",
    initialState: {
        movies: [],
    },
    reducers: {
        searchMovie(state, action) {
            state.movies = action.payload;
        },
    },
});

const moviesearch = movieSearch.reducer;
const {searchMovie} = movieSearch.actions;

export {searchMovie};
export default moviesearch;