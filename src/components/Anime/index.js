'use client'

import AnimeList from '@/components/AnimeList'
import Header from '@/components/Anime/Header'

const Anime = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
    const { data } = await response.json()

    return (
        <div className="px-2 md:px-8">
            <section className="flex flex-col">
                <Header linkHref="populer" title="Anime Populer" linkTitle="Lihat semua ..."/>
                <AnimeList topAnime={data}/>
            </section>
        </div>
    )
}

export default Anime;