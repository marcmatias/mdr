import React from "react"
import Heaader from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        descriptionTitle
                        descriptionText
                    }
                }
            }
    `
    )

    return (
        <div className="flex flex-col min-h-screen">
            <Heaader data={data} />
            <main className="flex-grow bg-gray-100 dark:bg-gray-700 py-8">
                {children}
            </main>
            <Footer data={data} />
        </div>
    )
}

export default Layout