'use client';

import { useEffect, useState } from 'react';
import { Pokemon } from '@interfaces/pokemon';

const useFetchPokemons = (limit: number, offset: number) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);

      try {
        const response = await fetch(`http://localhost:3000/api/pokemon?limit=${limit}&offset=${offset}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Pokemon[] = await response.json();
        setPokemonData(data);
      } catch {
        setPokemonData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [limit, offset]);

  return { pokemonData, loading };
};

export default useFetchPokemons;
