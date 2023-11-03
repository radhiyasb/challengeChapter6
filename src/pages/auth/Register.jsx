import React, { useEffect, useState } from "react";
import { useCreateUser } from "../../services/auth/Register-User";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { toast } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: registerUser, error, isSuccess, data } = useCreateUser();

  const handleInput = (e) => {
    if (e) {
    }
    if (e.target.id === "username") {
      setUsername(e.target.value);
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      sessionStorage.setItem("TokenRegister", data.data.data.token);
      toast.success("Registrasi Berhasil!");
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } else if (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else if (error.response && error.response.status === 401) {
        toast.error(error.response.data.message);
        throw error;
      }
    }
  }, [isSuccess, data, error, navigate]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    registerUser({
      email: Email,
      name: Username,
      password: Password,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-red-400 via-gray-600 to-red-800 h-screen">
      <div className="border-4 border-black px-20 py-16 bg-white rounded-lg">
        <h1 className="text-4xl font-bold pb-10 text-center">REGISTER</h1>
        <div className="flex flex-col items-center relative">
          <h1 className="text-lg font-normal text-left w-96">Username :</h1>
          <input placeholder="Input Name" onChange={handleInput} className="border-2 border-black w-96 py-2 px-2 rounded text-center" value={Username} id="username" type="text" />
          <FaUserGraduate className="absolute right-3 top-10 text-black" size={20} />

          <h1 className="text-lg font-normal pt-8 text-left w-96">Email :</h1>
          <input placeholder="Email Address" onChange={handleInput} className="border-2 border-black w-96 py-2 px-2 rounded text-center" value={Email} id="email" type="email" />
          <AiOutlineMail className="absolute right-3 top-36 text-black" size={20} />

          <h1 className="text-lg font-normal pt-6 text-left w-96">Password :</h1>
          <input placeholder="Password" onChange={handleInput} className="border-2 border-black w-96 py-2 px-2 rounded text-center" value={Password} id="password" type={showPassword ? "text" : "password"} />
          {showPassword ? (
            <AiFillEye className="absolute right-3 top-60 text-black cursor-pointer" size={20} onClick={handleShowPassword} />
          ) : (
            <AiFillEyeInvisible className="absolute right-3 top-60 text-black cursor-pointer" size={20} onClick={handleShowPassword} />
          )}
        </div>

        <div className="py-4 flex flex-col">
          <button
            type="button"
            className="px-9 py-2 bg-black text-white rounded-lg mt-2 w-96"
            onClick={() => {
              handleRegister();
            }}
          >
            Register
          </button>

          <span className="flex justify-center items-center text-black pt-4">
            Already have an account?
            <span
              className="px-2 cursor-pointer underline underline-offset-2 font-bold"
              onClick={() => {
                navigate("/Login");
              }}
            >
            Sign In
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
