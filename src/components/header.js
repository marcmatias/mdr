import React, { useState, useEffect } from 'react'
import sun from '../images/sun.png'
import moon from '../images/moon.png'

const Header = () => {

    let websiteTheme
    if (typeof window !== `undefined`) {
        websiteTheme = window.__theme
    }

    const [theme, setTheme] = useState(websiteTheme)

    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => {
            setTheme(window.__theme)
        }
    }, [])

    const ThemeToggle = () => {
        window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className="bg-white dark:bg-gray-800">
            <nav className="shadow">
                <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <a className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className="items-center md:flex">
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Home</a>
                            <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Shop</a>
                            <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Contact</a>
                            <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">About</a>
                        </div>
                        <div className="flex justify-center md:block">
                            <a className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                                <button onClick={ThemeToggle}>
                                    {theme === 'dark' ? (
                                        <img src={sun} alt="Light mode" />
                                    ) : (
                                        <img src={moon} alt="Dark mode" />
                                    )}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center md:flex">
                    <div className="w-full md:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl">Best Place To Choose Your Clothes</h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                            <button className="px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Shop Now</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
                        {/* <img className="w-full h-full max-w-2xl" src="../../../assets/svg/Catalogue-pana.svg" alt /> */}
                    </div>
                </div>
            </div>
        </header >

    )
}

export default Header