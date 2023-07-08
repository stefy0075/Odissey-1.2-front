import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";


import Footer from "../Pages/Footer/Footer";
export default function MainLayout() {
    return (
        <>

            <Header />
            <Outlet />
            <Footer />

        </>
    )
}
