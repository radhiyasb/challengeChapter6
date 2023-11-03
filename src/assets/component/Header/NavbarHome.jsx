import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { toast } from "react-toastify";

export const NavbarHome = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Fungsi untuk menangani perubahan pada input
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // handle search dengan enter setelah input movie
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/Search/${search}`);
    }
  };

  const Logout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    toast.warning("Logout Berhasil");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="bg-transparent fixed top-0 flex justify-between items-center w-screen px-8 py-2 pr-16 pl-16">
      {/* Movie List Home */}
      <div className="px-2 py-3">
        <span
          className="text-red-600 text-3xl font-bold cursor-pointer underline underline-offset-1"
          onClick={() => {
            navigate("/");
          }}
        >
          Movie-List
        </span>
      </div>

      {/* Input Search */}
      <div>
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="text-center w-[25rem] py-2 rounded-3xl border-2text-md font-semibold text-white border border-[#db0000] bg-transparent dark:border-[#db0000] dark:placeholder-gray-500 dark:text-white hover:bg-[#db0000] hover:placeholder:text-white"
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyPress}
        />
      </div>

      {/* Button Logout*/}
      <div className="px-3 mx-3 space-x-3 flex items-center">
        <span className="font-bold text-red-500 cursor-pointer hover:text-white">
          <AiOutlinePoweroff size={35} onClick={Logout} />
        </span>
      </div>
    </div>
  );
};
