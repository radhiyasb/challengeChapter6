import React from "react";

export const RenderMovie = (props) => {
  return (
    <div className="w-[20rem] h-[37rem] bg-black m-3 border-2 border-red-500 rounded-lg hover:scale-90 hover:cursor-pointer">
      <img src={`https://image.tmdb.org/t/p/original/${props.dataMovie.poster_path}`} className="border-b rounded" alt=""></img>
      <span className="text-center text-xl text-white flex items-center justify-center p-4 pt-4">"{props.dataMovie.original_title}"</span>
    </div>
  );
};
