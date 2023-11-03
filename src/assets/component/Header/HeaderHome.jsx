import React, { useEffect, useState } from "react";
import { NavbarHome } from "./NavbarHome";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoRemoveOutline } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";

export const HeaderHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
      tittle: "Godzilla vs. Kong",
      text: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      trailer: "https://youtu.be/odM92ap8_c0?si=yQshC9J81zM6apJY",
    },
    {
      url: "https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
      tittle: "Avatar: The Way of Water",
      text: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      trailer: "https://youtu.be/d9MyW72ELq0?si=aX9Q97axV-IqBGu3",
    },
    {
      url: "https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      tittle: "The Super Mario Bros. Movie",
      text: "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      trailer: "https://youtu.be/TnGl01FkMMo?si=v3gQUyI5YOZbK4mf",
    },
  ];

  // handle button trailer namun trailer yang muncul hanya 3 movie yang ada pada header
  const watchTrailer = (linkTrailer) => {
    window.open(linkTrailer);
  };
  
  //Prev Slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  //Next Slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //Slide Dot
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // handle auto slide per 3 detik
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);
    //handle clear
    return () => {
      clearInterval(autoSlide);
    };
  }, [currentIndex]);

  return (
    <div className="h-screen w-full relative ">
      {/* Image */}
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="h-screen w-full bg-center bg-cover duration-500 absolute top-0 left-0 z-0 border-b-2 border-red-500"></div>
      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-start justify-center p-48 z-1">
        {/* Left Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-2">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-2">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* Dot Slide */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-2">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? "text-white" : "text-gray-500"}`}>
              <IoRemoveOutline size={50} />
            </div>
          ))}
        </div>
        {/* Tittle */}
        <h1 className="text-white text-6xl font-bold w-[60%]">{slides[currentIndex].tittle}</h1>
        {/* Overview Text */}
        <span className="text-white text-base mt-6 w-[40%]">"{slides[currentIndex].text}"</span>
        {/* Button Watch Trailer */}
        <button className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white rounded-full mt-8 border border-1 hover:bg-red-600" onClick={() => watchTrailer(slides[currentIndex].trailer)}>
          <FaPlayCircle size={30} />
          WATCH TRAILER
        </button>
      </div>
      <NavbarHome style={{ zIndex: 2 }} />
    </div>
  );
};
