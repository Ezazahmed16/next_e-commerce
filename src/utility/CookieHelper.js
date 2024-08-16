import { cookies } from "next/headers";

export function isLogin() {
    const cookie = cookies();
    const token = cookie.get('token');
    return typeof token !== 'undefined' && token !== null;
}

export function getCookies() {
    const cookie = cookies();
    const token = cookie.get('token');
    return typeof token !== 'undefined' && token !== null;
}
