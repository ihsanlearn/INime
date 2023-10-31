import React from 'react'

const Header = ({ title }) => {
    return (
        <div className="w-full flex justify-center items-center pt-5 pb-3">
            <h3 className="font-bold text-color-accent text-xl">{title}</h3>
        </div>
    )
}

export default Header