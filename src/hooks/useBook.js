import axios from 'axios';
import { useEffect, useState } from 'react';

const useBook = (id) => {
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        console.error('Error loading books.', err);
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  return [book, isLoading, error];
};

export default useBook;
