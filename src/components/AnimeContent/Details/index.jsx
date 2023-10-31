"use client"

import Image from "next/image"
import VideoPlayer from "./VideoPlayer"

const Details = ({ api }) => {
    const anime = api

    return (
        <div className="flex md:flex-row flex-col">
            <div className="flex flex-col justify-between items-center p-8 md:p-4 shadow-2xl gap-5 rounded">
                <Image className="object-cover" src={anime.images.webp.image_url} width={405} height={576} alt={anime.images.jpg.image_url}/>
                <h1 className="text-center text-color-accent font-bold text-xl w-96">{anime.title}</h1>
            </div>
            <div className="flex flex-col p-4 px-10 gap-2">
                {anime.episodes ? <h1><span className="text-color-accent font-bold">Episodes :</span> {anime.episodes}</h1> : null }
                {anime.rank ? <h1><span className="text-color-accent font-bold">Rank :</span> {anime.rank}</h1> : null }
                {anime.score ? <h1><span className="text-color-accent font-bold">Score :</span> {anime.score}</h1> : null }
                {anime.popularity ? <h1><span className="text-color-accent font-bold">Popularity :</span> {anime.popularity}</h1> : null }
                {anime.year ? <h1><span className="text-color-accent font-bold">Year :</span> {anime.year}</h1> : null }
                {anime.source ? <h1><span className="text-color-accent font-bold">Source :</span> {anime.source}</h1> : null }
                {anime.duration ? <h1><span className="text-color-accent font-bold">Duration :</span> {anime.duration}</h1> : null }
                {anime.rating ? <h1><span className="text-color-accent font-bold">Rating :</span> {anime.rating}</h1> : null }
                {anime.timezone ? <h1><span className="text-color-accent font-bold">Broadcast :</span> {anime.broadcast.timezone} {anime.broadcast.string}</h1> : null }
                {anime.synopsis ? 
                    <>
                        <h1>
                            <span className="text-color-accent font-bold">Synopsis  :</span>
                        </h1> 
                        <p className="text-md text-justify ps-2 md:ps-10">{anime.synopsis}</p>
                    </>
                    : 
                    null 
                }
            </div>
            <VideoPlayer youtubeID={anime.trailer.youtube_id}/>
        </div>
    )
}

export default Details