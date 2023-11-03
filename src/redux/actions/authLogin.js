import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setToken } from "../reducers/auth/authLoginSlice";
import { reduxLoginUser } from "../../services/auth/login_user";


// default setupnya redux bawan dari redux kalo kita mau pakek dispath
// ya kayak gini mangilanya 
export const LoginUser = (input) => (dispatch) => {
    return reduxLoginUser(input).then((result) => {
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
    dispatch(setToken(result.data.data.token));
    return true;
}).catch((err) => {

});
}

export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken)
}