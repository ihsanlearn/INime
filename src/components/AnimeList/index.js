import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ topAnime }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 md:gap-4">
            {topAnime.map(anime => {
                return (
                    <Link key={anime.mal_id} href={`/${anime.mal_id}`} className="shadow-xl p-4 flex flex-col justify-between items-center">
                        <Image src={anime.images.webp.image_url} width={350} height={350} alt="..." className="mb-2 w-full max-h-80 object-cover"/>
                        <h3 className="font-bold rounded-lg">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList