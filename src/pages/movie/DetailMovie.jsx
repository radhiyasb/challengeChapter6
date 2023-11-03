import React, { useEffect, useState } from "react";
import { NavbarHome } from "../../assets/component/Header/NavbarHome";
import { useParams } from "react-router-dom";
import { fetchDataMovieDetail } from "../../services/data-movie/get-data-movie-detail";
import { FaPlayCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { getActDetail } from "../../redux/actions/movieActions/getDetailMovie";
import { useDispatch, useSelector } from "react-redux";

export const DetailMovie = () => {
  const movieId = useParams();
  const details = useSelector((store) => store.detail.detail );
  const token = CookieStorage.get(CookieKeys.AuthToken);
  const genres = details && details.genres.map((gen) => gen.name).join(", ");
  console.log(details, "details");

  const dispatch = useDispatch()
  const getDetail = () => {
    dispatch(getActDetail(movieId.movieId))
  };

  useEffect(() => {
    getDetail();
  }, [movieId.movieId]);

  return (
    // Lihat Movie Detail Berdasarkan ID
    <div className="relative ">
      {details && (
        <div
          className="h-[100vh] bg-cover bg-center z-0 "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`,
          }}
        ></div>
      )}

      {/* Detail Movie */}
      <div className="absolute inset-0 flex flex-col items-start justify-center p-48 z-1 ">
        {details && (
          <div className="absolute text-white drop-shadow-2xl ">
            <h1 className="text-6xl font-bold w-[75%]">{details.title}</h1>
            <p className="text-lg mt-6 ">{genres}</p>
            <p className="mt-6 text-base w-[40%]">"{details.overview}"</p>
            <p className="mt-6 text-lg flex items-center gap-2">
              <AiOutlineStar size={30} className="text-yellow-300" />
              {details.vote_average.toFixed(1)} / 10.0
            </p>
            <button className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white rounded-full mt-6 border border-1 hover:bg-red-600">
              <FaPlayCircle size={30} />
              WATCH TRAILER
            </button>
          </div>
        )}
      </div>
      <NavbarHome style={{ zIndex: 2 }} />
    </div>
  );
};
