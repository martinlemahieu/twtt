import { Anchor, Grid, Loader, Space, Tabs, Text, Title } from '@mantine/core';
import { useParams, Link } from 'react-router-dom';
import InfoList from '../components/InfoList';
import CharacterPreview from '../components/CharacterPreview';
import Layout from '../components/Layout';
import useBook from '../hooks/useBook';
import { extractId } from '../lib/helpers';

const BookPage = () => {
  const { id } = useParams();
  const [book, isBookLoading, bookError] = useBook(id);

  return (
    <Layout>
      {isBookLoading && <Loader />}

      {!isBookLoading && !!bookError && (
        <Text color="red" transform="uppercase">
          Error loading book.
        </Text>
      )}

      {!!book && !isBookLoading && !bookError && (
        <>
          <Title order={1}>{book.name}</Title>

          <Space h="xl" />

          <Tabs defaultValue="infos">
            <Tabs.List>
              <Tabs.Tab value="infos">Infos</Tabs.Tab>
              <Tabs.Tab value="povCharacters">POV characters</Tabs.Tab>
              <Tabs.Tab value="characters">Characters</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="infos" pt="xs" px="md">
              <InfoList
                infos={[
                  { term: 'Author', description: book.authors.join(', ') },
                  { term: 'Publisher', description: book.publisher },
                  { term: 'ISBN', description: book.isbn },
                  { term: 'Pages', description: book.numberOfPages },
                ]}
              />
            </Tabs.Panel>

            <Tabs.Panel value="povCharacters" pt="xs" px="md">
              <Grid>
                {book.povCharacters.map((character, index) => (
                  <Grid.Col key={index} xs={12} sm={6} md={4}>
                    <CharacterPreview id={extractId(character)} />
                  </Grid.Col>
                ))}
              </Grid>
            </Tabs.Panel>

            <Tabs.Panel value="characters" pt="xs" px="md">
              <Grid>
                {book.characters.map((character, index) => (
                  <Grid.Col key={index} xs={12} sm={6} md={4}>
                    <Anchor
                      component={Link}
                      to={`/character/${extractId(character)}`}
                    >
                      {extractId(character)}
                    </Anchor>
                  </Grid.Col>
                ))}
              </Grid>
            </Tabs.Panel>
          </Tabs>
        </>
      )}
    </Layout>
  );
};

export default BookPage;
