import React, { useState, useEffect } from 'react'
import { RiContrastFill } from "@react-icons/all-files/ri/RiContrastFill";
import logo from '../images/mdrLogo.jpg'
import { Link } from "gatsby"


const Header = ({ data }) => {

    const [theme, setTheme] = useState()
    const [menu, setMenu] = useState(true)

    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    const themeToggle = () => {
        window.__setPreferredTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header className="bg-white dark:bg-gray-800">
            <nav className="shadow">
                <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <a className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">{data.site.siteMetadata.title}</a>
                        </div>
                        {/* Mobile menu button */}
                        <div className="flex md:hidden" onClick={toggleMenu}>
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={`items-center md:flex ${menu === true ? "hidden" : null}`}>
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/">Início</Link>

                            <a className="my-1 text-base text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#" onClick={themeToggle}>
                                <RiContrastFill />
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center md:flex">
                    <div className="w-full md:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl">{data.site.siteMetadata.descriptionTitle}</h1>
                            <p className="mt-2 mr-2 text-gray-600 dark:text-gray-400">{data.site.siteMetadata.descriptionText}</p>
                            <button className="px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Conhecer</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
                        <img className="w-full h-full max-w-2xl" src={logo} />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header
