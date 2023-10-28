import Link from "next/link"
import InputSearch from './InputSearch'

const Navbar = ({ title }) => {
    return (
        <header>
            <div className="flex relative flex-col items-start bg-slate-800 text-white p-4 px-8 md:justify-between md:flex-row md:items-center">
                <Link href="/" className="font-semibold mb-3 md:mb-0">{title}</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar