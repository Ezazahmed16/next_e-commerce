import React from 'react'
import AppNavbar from './AppNavbar'
import AppFooter from './AppFooter'

const Master = (props) => {
    return (
        <>
            <AppNavbar />
            {props.children}
            <AppFooter />
        </>
    )
}

export default Master