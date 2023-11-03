import { combineReducers } from "redux";
import authLoginSlice from "./auth/authLoginSlice";
import movieReducer from "./movie/movieSlice";
import moviesDetail from "./movie/movieDetail";
import getUser from "./auth/getUser";
import moviesearch from "./movie/movieSearch";

//combine reducer merupakan tempat set up reducer yang digunakan dalma aplikasi
const rootReducer = combineReducers({
    auth : authLoginSlice,
    get : getUser,
    movie : movieReducer,
    detail : moviesDetail,
    search : moviesearch,
})
export default rootReducer;