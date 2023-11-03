import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useMutation } from "@tanstack/react-query";
import http2 from "../../utils/http2";
import { CookieKeys, CookieStorage } from "../../utils/cookies";



// khusus Redux
export const reduxLoginUser = async (input)=>{
  return await  http2.post(API_ENDPOINT.LOGIN_USER , input )
}


// use Mutation Function 

const LoginUser = async (input) => {
  return await http2.post(API_ENDPOINT.LOGIN_USER , input ).then((result) => {
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
    return result
  }).catch((err) => {
    
  });;
}

const useLoginUser = () => {
    return useMutation(LoginUser)
  };
  export { LoginUser , useLoginUser }

