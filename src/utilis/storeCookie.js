import { Cookies } from 'react-cookie';
import store from '~/app/store';

export const setTokenCookie = () => {
    const cookies = new Cookies();
    let expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 1000);
    cookies.set("authToken", store.token, {
        path: "/",
        expires,
    });
}

