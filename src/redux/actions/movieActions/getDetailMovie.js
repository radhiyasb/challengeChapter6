import { getDetail } from "../../../services/data-movie/get-data-movie-detail"
import { detailMovie } from "../../reducers/movie/movieDetail";

export const getActDetail = (id) => async (dispatch)=> {
    return getDetail(id)
    .then((response) => {
        const detail = response.data.data;

        dispatch(detailMovie(detail));
        return response.data.data;
    })
    .catch((err) => {});
}