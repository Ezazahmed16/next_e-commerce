import React from 'react'
import AppNavbar from './AppNavbar'
import AppFooter from './AppFooter'
import { isLogin } from '@/utility/CookieHelper'

const Master = (props) => {
    let Login = isLogin();
    return (
        <>
            <AppNavbar isLogin={Login} />
            {props.children}
            <AppFooter />
        </>
    )
}

export default Master