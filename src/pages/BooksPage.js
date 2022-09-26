import { Loader, Text } from '@mantine/core';
import BookList from '../components/BookList';
import Layout from '../components/Layout';
import useBooks from '../hooks/useBooks';

const BooksPage = () => {
  const [books, areBooksLoading, booksError] = useBooks();

  return (
    <Layout>
      {areBooksLoading && <Loader />}

      {!areBooksLoading && !!booksError && (
        <Text color="red" transform="uppercase">
          Error loading books.
        </Text>
      )}

      {!!books && !areBooksLoading && !booksError && <BookList books={books} />}
    </Layout>
  );
};

export default BooksPage;
