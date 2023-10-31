"use client"

import React from 'react'

const Pagination = ({ page, setPage, allPage }) => {

    const scrollUp = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handlePage = (e) => {
        if (e.target.id === "next") {
            setPage(prevState => prevState < allPage ? prevState + 1 : allPage)
        } else if (e.target.id === "previous") {
            setPage(prevState => prevState > 1 ? prevState - 1 : 1)
        }

        scrollUp()
    }

    return (
        <div className="w-full flex justify-center items-center py-16 text-white text-lg">
            <div className="flex justify-center items-center gap-5">
                {page == 1 ? 
                    <p className="text-color-enabled">Previous</p> 
                    :
                    <button id="previous" onClick={handlePage} className="hover:text-color-accent " >Previous</button>
                }
                <p className="text-color-accent">|</p>
                <p className="px-3 py-2 flex justify-center items-center border-solid text-color-accent border-color-accent border-2">{page} of {allPage}</p>
                <p className="text-color-accent">|</p>
                {page == allPage ? 
                    <p className="text-color-enabled">Next</p> 
                    : 
                    <button id="next" onClick={handlePage} className="hover:text-color-accent">Next</button>
                }
            </div>
        </div>
    )
}

export default Pagination