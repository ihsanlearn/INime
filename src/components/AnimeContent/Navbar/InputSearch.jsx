'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = async (e) => {
        if (e.key === "Enter" || e.type === "click") {
            e.preventDefault()
            const keyword = searchRef.current.value

            keyword ? router.push(`/search/${keyword}`) : null
            e.target.value = ""
        }
    }

    return (
        <div className="relative text-color-dark">
            <input id="inputSearch" onKeyDown={handleSearch} ref={searchRef} placeholder="Cari anime..." type="text" className="rounded p-1 md:px-2 w-full md:w-96 text-black"/>
            <button onClick={handleSearch} className="btn-search absolute top-1 end-2 text-black">
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch