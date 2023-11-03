import { getPopular } from "../../../services/data-movie/get-data-movie-popular";
import { updateMovie } from "../../reducers/movie/movieSlice";

export const getActPopular = () => async (dispatch)=> {
    return getPopular()
    .then((response) => {
        const movies = response.data.data;
        dispatch(updateMovie(movies));
    })
    .catch((err) => {});
}