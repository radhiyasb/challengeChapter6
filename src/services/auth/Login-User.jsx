import { useMutation } from "@tanstack/react-query";
import http2 from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";

const loginUser = async (input) => {
    try {
        const result = await http2.post(API_ENDPOINT.Login_User, input);
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
        toast.success("Login Berhasil!")
        setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        return result
        
    } catch (err) {
        if (err.response.status === 400) {
            toast.error(err.response.data.message)
        }else if (err.response.status === 401) {
            toast.error(err.response.data.message)
            throw err
        }
    }
}

const useLoginUser = () => {
    return useMutation(loginUser)
}
export { loginUser, useLoginUser }

