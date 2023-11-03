import Cookies from "universal-cookie"

//default value
const cookies = new Cookies()

//kunci cookies
export const CookieKeys = {
    AuthToken: "TokenLogin",
    User: "user",
}

//setting default
const CookieOptions = {
    path: "/",
    secure: true,
}


//setting CRD
export const CookieStorage = {
    set: (key, data, options) => {
        return cookies.set(key, data, { ...CookieOptions, ...options })
    },
    get: (key, options) => {
        return cookies.get(key, { ...CookieOptions, ...options })
    },
    remove: (key, options) => {
        return cookies.remove(key, { ...CookieOptions, ...options })
    },
}