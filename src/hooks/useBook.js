import axios from 'axios';
import { useEffect, useState } from 'react';

const useBook = (id) => {
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://www.anapioficeandfire.com/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading book.', err);
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  return [book, isLoading, error];
};

export default useBook;
