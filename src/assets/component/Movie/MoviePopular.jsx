import React, { useEffect, useState } from "react";
import { RenderMovie } from "./RenderMovie";
import { fetchDataMoviePopular } from "../../../services/data-movie/get-data-movie-popular";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getActPopular } from "../../../redux/actions/movieActions/getPopularMovie";

export const MoviePopular = () => {
  const token = CookieStorage.get(CookieKeys.AuthToken);
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const getmovie = () => {
    dispatch(getActPopular())

  };

  useEffect(()=> {
    getmovie();
  })

  const data = useSelector((store)=>store.movie.movies)
  console.log(data);

  return (
    <div className="bg-black pt-5">
      <div className="text-center px-20 border-b-2 pb-8 pt-6 border-red-500">
        <h1 className="text-white text-5xl font-bold mb-4"> Popular Movie </h1>
      </div>

      <div className="mySwiper">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={-50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}  
        >
          {data.map((value, index) => (
            <SwiperSlide>
              <div className="px-10 border-b-2 pb-10 border-red-500 pt-10"
                key={value.id}
                onClick={() => {navigate(`/detail/${value.id}`)}}>
                <RenderMovie dataMovie={value} DataAll={data.results} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
