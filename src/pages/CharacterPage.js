import { Anchor, Grid, Loader, Space, Tabs, Text, Title } from '@mantine/core';
import { useParams, Link } from 'react-router-dom';
import InfoList from '../components/InfoList';
import Layout from '../components/Layout';
import useCharacter from '../hooks/useCharacter';
import { extractId } from '../lib/helpers';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, isCharacterLoading, characterError] = useCharacter(id);

  return (
    <Layout>
      {isCharacterLoading && <Loader />}

      {!isCharacterLoading && !!characterError && (
        <Text color="red" transform="uppercase">
          Error loading character.
        </Text>
      )}

      {!!character && !isCharacterLoading && !characterError && (
        <>
          <Title order={1}>{character.name}</Title>

          <Space h="xl" />

          <Tabs defaultValue="infos">
            <Tabs.List>
              <Tabs.Tab value="infos">Infos</Tabs.Tab>
              <Tabs.Tab value="povBooks">POV Books</Tabs.Tab>
              <Tabs.Tab value="books">Books</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="infos" pt="xs" px="md">
              <InfoList
                infos={[
                  {
                    term: 'Aliases',
                    description: character.aliases.join(', '),
                  },
                  { term: 'Titles', description: character.titles.join(', ') },
                ]}
              />
            </Tabs.Panel>

            <Tabs.Panel value="povBooks" pt="xs" px="md">
              <Grid>
                {character.povBooks.map((book, index) => (
                  <Grid.Col key={index} xs={12} sm={6} md={4}>
                    <Anchor component={Link} to={`/book/${extractId(book)}`}>
                      {extractId(book)}
                    </Anchor>
                  </Grid.Col>
                ))}
              </Grid>
            </Tabs.Panel>

            <Tabs.Panel value="books" pt="xs" px="md">
              <Grid>
                {character.books.map((book, index) => (
                  <Grid.Col key={index} xs={12} sm={6} md={4}>
                    <Anchor component={Link} to={`/book/${extractId(book)}`}>
                      {extractId(book)}
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

export default CharacterPage;
