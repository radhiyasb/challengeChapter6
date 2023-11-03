import { createSlice } from "@reduxjs/toolkit";

const movieDetail = createSlice({
    name: "Movie Detail",
    initialState: {
        detail: "",
    },
    reducers: {
        detailMovie(state, action) {
            state.detail = action.payload;
        },
    },
})
const moviesDetail = movieDetail.reducer;
const {detailMovie} = movieDetail.actions;

export {detailMovie};
export default moviesDetail;
