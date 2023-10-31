import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-4">
            {api.data?.map(anime => {
                return (
                    <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="shadow-2xl hover:text-color-accent p-2 md:p-4 flex flex-col justify-between items-center">
                        <Image src={anime.images.webp.image_url} width={350} height={350} alt="..." className="md:mb-2 w-full max-h-80 object-cover"/>
                        <br />
                        <h3 className="font-bold text-center rounded-lg">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList