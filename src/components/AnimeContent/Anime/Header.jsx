import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex items-center justify-between pt-7 pb-1 px-2 md:px-6">
            <h3 className="font-bold text-lg md:text-2xl text-color-accent">{title}</h3>
            <Link href={`/${linkHref ? linkHref : null}`} className="underline text-xs hover:text-color-accent md:text-base">{linkTitle ? linkTitle : null}</Link>
        </div>
    )
}

export default Header