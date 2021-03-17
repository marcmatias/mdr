import React from "react"
import Heaader from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

    return (
        <div className="flex flex-col min-h-screen">
            <Heaader />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout