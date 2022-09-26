import { Loader, Space, Tabs, Text, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import BookInfos from '../components/BookInfos';
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

      {!!book && !isBookLoading && !bookError && (
        <>
          <Title order={1}>{book.name}</Title>

          <Space h="xl" />

          <Tabs defaultValue="infos">
            <Tabs.List>
              <Tabs.Tab value="infos">Infos</Tabs.Tab>
              <Tabs.Tab value="povCharacters">
                Point-of-view characters
              </Tabs.Tab>
              <Tabs.Tab value="characters">Characters</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="infos" pt="xs" px="md">
              <BookInfos
                infos={[
                  { term: 'Author', description: book.authors.join(', ') },
                  { term: 'Publisher', description: book.publisher },
                  { term: 'ISBN', description: book.isbn },
                  { term: 'Pages', description: book.numberOfPages },
                ]}
              />
            </Tabs.Panel>

            <Tabs.Panel value="povCharacters" pt="xs" px="md">
              <ul>
                {book.povCharacters.map((character, index) => (
                  <li key={index}>{character}</li>
                ))}
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value="characters" pt="xs" px="md">
              <ul>
                {book.characters.map((character, index) => (
                  <li key={index}>{character}</li>
                ))}
              </ul>
            </Tabs.Panel>
          </Tabs>
        </>
      )}
    </Layout>
  );
};

export default BookPage;
