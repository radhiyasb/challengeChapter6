import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { FcGoogle } from "react-icons/fc";

function GoogleLogin() {
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER}/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      // Simpan token ke dalam cookies
      CookieStorage.set(CookieKeys.AuthToken, token);
      toast.success("Login Berhasil!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <button className=" text-black font-bold py-2 px-4" onClick={() => loginWithGoogle()}>
      <div className="bg-blue-500 gap-4 px-2 py-2 text-white flex items-center rounded">
        <FcGoogle size={30} className="bg-white rounded" /> Sign in with Google
      </div>
    </button>
  );
}

export default GoogleLogin;
