import { getSearch } from "../../../services/data-movie/get-data-search-movie";
import { searchMovie } from "../../reducers/movie/movieSearch";

export const getActSearch = (query) => async (dispatch)=> {
    getSearch(query)
    .then((result) => {
      dispatch(searchMovie(result?.data?.data));
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/";
      }
    });
};