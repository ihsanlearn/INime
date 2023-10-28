'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault()
        const keyword = searchRef.current.value

        router.push(`/search/${keyword}`)
    }

    return (
        <div className="relative">
            <input ref={searchRef} placeholder="Cari anime..." type="text" className="rounded p-1 md:px-2 w-full md:w-96 text-black"/>
            <button onClick={handleSearch} className="btn-search absolute top-1 end-2 text-black"><MagnifyingGlass size={24} /></button>
        </div>
    )
}

export default InputSearch