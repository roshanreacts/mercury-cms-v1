
import store from '~/store';
import jwt from 'jsonwebtoken';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';


export const setTokenCookie = () => {
    let expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 1000);

    setCookie("authToken", store.token, {
        expires: expires
    });
}

export const checkTokenExpiry = () => {
    let token = getCookie("authToken")
    if (token) {
        const { exp } = jwt.decode(token);

        if (exp < Math.floor(new Date().getTime() / 1000)) {
            
            deleteCookie("authToken");
            return true;
        }
    }
    else{
        return true;
    }
    return false;
}

export const clearTokenCookie = () => {
    deleteCookie("authToken");
}

export const getLoggedInUserIdFromCookie = () => {
    let token = getCookie("authToken");
    if (token) {
        const { id } = jwt.decode(token);
        return id;
    }
    return undefined
}