import React, { useEffect, useState } from "react";
import { NavbarHome } from "../../assets/component/Header/NavbarHome";
import { useSearchMovieDataQuery } from "../../services/data-movie/get-data-search-movie";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getActSearch } from "../../redux/actions/movieActions/getSearchMovie";

export const SearchMovie = () => {
  const navigate = useNavigate();
  const { namemovie } = useParams();
  const [movies, setMovies] = useState([]);
  const [page] = useState(1);

  const { data: searchM, isSuccess } = useSearchMovieDataQuery({
    page: page,
    query: namemovie,
  });

  const dispatch = useDispatch();
  const [search, setsearch] = useState([]);
  const [loading, setloading] = useState(false);

  // const searchMovies = async () => {
  //   if (searchM) {
  //     setMovies(searchM.data);
  //   }
  // };
  // useEffect(() => {
  //   searchMovies();
  // }, [namemovie, isSuccess]);

  useEffect(() => {
    setloading(true);
    dispatch(getActSearch(namemovie))
      .then((result) => {
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }, [namemovie, dispatch]);

  useEffect(() => {
    if (!loading) {
      setsearch(movies);
    }
  }, [movies, loading]);
  return (
    <div className="bg-black">
      <div className="text-center px-20 border-b-2 border-red-500 pt-20 bg-black">
        <h1 className="text-red-600 text-5xl font-bold mb-4 pb-4">Search Results For: {namemovie}</h1>
      </div>

      {/* menampilkan data berdasarkan inputan search */}
      {movies && (
        <div className="flex flex-wrap justify-center items-center pb-6 pt-10">
          {movies.map((movieSearch) => (
            <div
              className="w-[20rem] h-[37rem] bg-black m-3 border-2 border-red-500 rounded-lg hover:scale-90 hover:cursor-pointer"
              key={movieSearch.id}
              onClick={() => {
                navigate(`/detail/${movieSearch.id}`);
              }}
            >
              <img src={`https://image.tmdb.org/t/p/w500${movieSearch.poster_path}`} alt="" className="border-b rounded" />
              <span className="text-center text-xl text-white flex items-center justify-center p-4 pt-4">"{movieSearch.title}"</span>
            </div>
          ))}
        </div>
      )}
      <NavbarHome style={{ zIndex: 0 }} />
    </div>
  );
};
