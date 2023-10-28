import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex items-center justify-between pt-7 pb-1 px-6">
            <h3 className="font-bold">{title}</h3>
            <Link href={`/${linkHref}`} className="underline text-xs md:text-base">{linkTitle ? linkTitle : null}</Link>
        </div>
    )
}

export default Header