"use client"

import AnimeList from '@/components/AnimeList'
import Header from '@/components/Anime/Header'

const Page = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
    const { data } = await response.json()

    return (
        <div className="px-4 md:px-12">
            <section className="flex flex-col">
                <Header linkHref="populer" title="Anime Populer"/>
                <AnimeList topAnime={data}/>
            </section>
        </div>
    )
}

export default Page;