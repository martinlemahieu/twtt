import { Loader, Text } from '@mantine/core';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import useBook from '../hooks/useBook';

const BookPage = () => {
  const { id } = useParams();
  const [book, isBookLoading, bookError] = useBook(id);

  return (
    <Layout>
      {isBookLoading && <Loader />}
      {!isBookLoading && !!bookError && (
        <Text color="red" transform="uppercase">
          Error loading books.
        </Text>
      )}
      {!isBookLoading && !bookError && (
        <p>
          here the details of the book, and characters, for res id : {book.name}
        </p>
      )}
    </Layout>
  );
};

export default BookPage;
