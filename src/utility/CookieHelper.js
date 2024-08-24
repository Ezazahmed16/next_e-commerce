import { cookies } from "next/headers";

export function isLogin() {
    const cookie = cookies();
    const token = cookie.get('token');
    return typeof token !== 'undefined' && token !== null;
}

export async function getCookies() {
    const cookie = cookies();
    const token = cookie.get('token');
    
    if(typeof token === 'undefined'){
        return false
    }else{
        return 'token='+token.value
    }
}
