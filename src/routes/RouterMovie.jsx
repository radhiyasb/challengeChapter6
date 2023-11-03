import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/movie/Home";
import { SearchMovie } from "../pages/movie/SearchMovie";
import { DetailMovie } from "../pages/movie/DetailMovie";
import { Register } from "../pages/auth/Register";
import { LoginPage } from "../pages/auth/LoginPage";
import TokenProtected from "../assets/component/protected/TokenProtected";

export const RouterMovie = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/homepage" element={
        <TokenProtected>
          <Home />
        </TokenProtected>}>    
        </Route>
        <Route path="/Search/:namemovie" element={<SearchMovie />} />
        <Route path="/Detail/:movieId" element={<DetailMovie />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
