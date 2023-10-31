'use client'

import { FinnTheHuman } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="w-full h-screen text-color-primary bg-color-secondary flex justify-center items-center">
            <div className="flex flex-col items-center text-color-accent">
                <FinnTheHuman size={32} />
                <h3>Not Found Bang</h3>
                <Link className="mt-4 text-color-primary hover:text-color-accent underline" href="/">Back to Reality</Link>
            </div>
        </div>
    )
}

export default NotFound