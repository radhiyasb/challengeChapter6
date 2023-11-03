import React from "react";
import { MoviePopular } from "../../assets/component/Movie/MoviePopular";
import { HeaderHome } from "../../assets/component/Header/HeaderHome";
import { Footer } from "../../assets/component/Header/Footer";
import { useGetDataUser } from "../../services/auth/get-User";

export const Home = () => {
  const dataMovie = useGetDataUser({});

  return (
    <div>
      <HeaderHome />
      <MoviePopular />
      <Footer />
    </div>
  );
};
