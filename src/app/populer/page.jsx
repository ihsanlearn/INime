'use client';

import AnimeList from '@/components/AnimeContent/AnimeList';
import Header from '@/components/Utilities/Populer/Header';
import Pagination from '@/components/Utilities/Populer/Pagination';
import { useEffect, useState } from 'react';
import { getAPIAnime } from '../../libs/api-libs';

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const topAnime = await getAPIAnime('top/anime', `page=${page}`);

    setTopAnime(topAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="px-4 md:px-12 pt-5">
      <section className="flex flex-col">
        <Header title={`Anime Populer #${page}`} />
        <AnimeList api={topAnime} />
        <Pagination page={page} setPage={setPage} allPage={topAnime.pagination?.last_visible_page} />
      </section>
    </div>
  );
};

export default Page;
