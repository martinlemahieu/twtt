import axios from 'axios';
import { useEffect, useState } from 'react';

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://www.anapioficeandfire.com/api/books?pageSize=50')
      .then((response) => {
        setBooks(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading books.', err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return [books, isLoading, error];
};

export default useBooks;
