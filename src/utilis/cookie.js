import { Cookies } from 'react-cookie';
import store from '~/app/store';
import jwt from 'jsonwebtoken';


export const setTokenCookie = () => {
    const cookies = new Cookies();
    let expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 1000);
    cookies.set("authToken", store.token, {
        path: "/",
        expires,
    });
}

export const checkTokenExpiry = () => {
    const cookie = new Cookies();
    let token = cookie.get("authToken");
    if (token) {
        const { exp } = jwt.decode(token);
        if (exp < (new Date().getTime() + 1) / 1000)
            return false;
        else
            cookie.remove("authToken");
    }
    return true;
}
