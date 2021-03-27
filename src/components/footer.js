import React from "react"
import { RiCopyleftLine } from "@react-icons/all-files/ri/RiCopyleftLine";

const Footer = ({ data }) => {

    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <div>
                                <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">{data.site.siteMetadata.title}</a>
                            </div>
                            <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">{data.site.siteMetadata.descriptionText}</p>
                            <div className="flex mt-4 -mx-2">
                                <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Facebook">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                        <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                                    </svg>
                                </a>
                                <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Twitter">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                        <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />
                <div className="flex justify-center text-gray-800 dark:text-white">
                    <div className="self-center mr-1">
                        <RiCopyleftLine />
                    </div>
                    <div>
                        {data.site.siteMetadata.title} 2021
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer