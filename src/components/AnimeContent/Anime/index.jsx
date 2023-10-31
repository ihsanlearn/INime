import AnimeList from '@/components/AnimeContent/AnimeList';
import Header from './Header';
import { getAPIAnime, getNestedAnimeResponse } from '@/libs/api-libs';

const Anime = async () => {
  const topAnime = await getAPIAnime('top/anime', 'limit=8');
  let recomendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');

  const rangeSlicing = (max) => {
    return Math.floor(Math.random() * max) + 1;
  }

  const resultRange = rangeSlicing(recomendedAnime.length - 10)

  recomendedAnime = { data: recomendedAnime.slice(resultRange, resultRange + 10)};

  return (
    <div className="px-2 md:px-8">
      <section className="flex flex-col text-color-primary">
        <Header linkHref="populer" title="Anime Populer" linkTitle="Lihat semua ..." />
        <AnimeList api={topAnime} />
      </section>

      <section className="mt-8 flex flex-col text-color-primary">
        <Header title="Rekomendasi Anime" />
        <AnimeList api={recomendedAnime} />
      </section>
    </div>
  );
};

export default Anime;
