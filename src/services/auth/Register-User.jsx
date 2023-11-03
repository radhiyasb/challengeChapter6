import { useMutation } from "@tanstack/react-query";
import http2 from "../../utils/http2";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const registerUser = async (input) => {
    return await http2.post(API_ENDPOINT.Register_User, input)
}

const useCreateUser = () => {
    return useMutation(registerUser)
}
export {registerUser, useCreateUser}
