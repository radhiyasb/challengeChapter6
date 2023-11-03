import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: [],
    },
    reducers: {
        updateMovie(state, action) {
            state.movies = action.payload;
        },
    },
});

const movieReducer = movieSlice.reducer;
const { updateMovie} = movieSlice.actions;

export {updateMovie};
export default movieReducer;