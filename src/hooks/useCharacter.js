import axios from 'axios';
import { useEffect, useState } from 'react';

const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://www.anapioficeandfire.com/api/characters/${id}`)
      .then((response) => {
        setCharacter(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading character.', err);
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  return [character, isLoading, error];
};

export default useCharacter;
