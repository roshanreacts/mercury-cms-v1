// import { Cookies } from 'react-cookie';
import store from '~/store';
import jwt from 'jsonwebtoken';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';


export const setTokenCookie = () => {
    let expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 1000);


    setCookie("authToken", store.token, {
        path: "/",
        expires,
    });
}

export const checkTokenExpiry = () => {
    // const cookie = new Cookies();
    let token = getCookie("authToken");
    if (token) {
        const { exp } = jwt.decode(token);
        if (exp < (new Date().getTime() + 1) / 1000)
            return false;
        else
            deleteCookie("authToken");
    }
    return true;
}

export const clearTokenCookie = () => {
    deleteCookie("authToken");
}