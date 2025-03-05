import { useInfiniteQuery } from '@tanstack/react-query';

const LIMIT = 20;

const fetchPokemons = async (offset: number) => {
  const response = await fetch(`http://localhost:3000/api/pokemon?limit=${LIMIT}&offset=${offset}`);
  if (!response.ok) {
    throw new Error('Network Error');
  }
  return response.json();
};

const useFetchPokemons = () => {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam = 0 }) => fetchPokemons(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const nextOffset = pages.length * LIMIT;
      return lastPage.length > 0 ? nextOffset : undefined;
    },
    initialPageParam: 0,
  });
};

export default useFetchPokemons;
