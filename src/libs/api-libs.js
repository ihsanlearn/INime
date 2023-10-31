export const getAPIAnime = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const dataAnime = await response.json();

    return dataAnime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAPIAnime(resource);

    return response.data.flatMap(anime => anime.entry);
};
