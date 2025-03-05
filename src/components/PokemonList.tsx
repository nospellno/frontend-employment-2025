'use client';

import Image from 'next/image';
import React from 'react';
import useFetchPokemons from '@hooks/useFetchPokemons';
import Loading from '@shared/Loading';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { Pokemon } from '@/interfaces/pokemon';

const PokemonList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } = useFetchPokemons();
  const loadMoreRef = useInfiniteScroll({ hasNextPage, fetchNextPage });

  return (
    <div>
      <ul className="m-auto grid max-w-screen-xl grid-cols-4 gap-4 p-8 max-md:grid-cols-2">
        {data?.pages.flat().map((pokemon: Pokemon) => (
          <li
            key={pokemon.name}
            className="flex flex-col items-start rounded-md bg-primary-foreground p-5 shadow-lg dark:bg-primary"
          >
            <Image
              width={600}
              height={800}
              src={pokemon.image || 'https://i.pinimg.com/736x/ed/fb/34/edfb34be56d20cf599a84c7923db47d9.jpg'}
              className="aspect-[3/4] rounded-md border border-zinc-600 bg-primary-foreground object-contain p-5 dark:bg-primary"
              alt={pokemon.name}
              priority
            />
            <p className="mt-4">{pokemon.name}</p>
          </li>
        ))}
      </ul>
      <div ref={loadMoreRef} />
      {(isLoading || isFetching) && <Loading />}
    </div>
  );
};

export default PokemonList;
