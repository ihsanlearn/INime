'use client';

import { getAPIAnime } from '@/libs/api-libs';
import Details from '@/components/AnimeContent/Details';

const AnimeDetails = async ({ params: { id } }) => {
  const { data } = await getAPIAnime(`anime/${id}`);

  return (
    <div className="md:p-10">
      <Details api={data} />
    </div>
  );
};

export default AnimeDetails;
