'use client';

import AnimeList from '@/components/AnimeContent/AnimeList';
import Header from '@/components/AnimeContent/Anime/Header';
import { getAPIAnime } from '@/libs/api-libs';

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAPIAnime('anime', `q=${decodedKeyword}`);

  return (
    <div className="px-2 md:px-8">
      <section className="flex flex-col text-color-primary">
        <Header title={`Anime Pencarian : ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
