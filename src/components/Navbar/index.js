const Navbar = ({ title }) => {
    return (
        <header>
            <div className="flex flex-col items-start bg-slate-800 text-white p-4 md:justify-between md:flex-row md:items-center">
                <p className="font-semibold mb-3 md:mb-0">{title}</p>
                <input placeholder="Cari anime..." type="text" className="rounded p-1 md:px-2 w-full md:w-56"/>
            </div>
        </header>
    )
}

export default Navbar