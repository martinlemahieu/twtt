import { Button, Card, Loader, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';
import { extractId } from '../lib/helpers';
import InfoList from './InfoList';

const CharacterPreview = ({ id }) => {
  const [character, isCharacterLoading, characterError] = useCharacter(id);
  const navigate = useNavigate();

  if (isCharacterLoading) {
    return (
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Loader />
      </Card>
    );
  }

  if (characterError) {
    return (
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Text color="red" transform="uppercase">
          Error loading character.
        </Text>
      </Card>
    );
  }

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Text>
          <strong>{character.name}</strong>
        </Text>
      </Card.Section>

      <InfoList
        infos={[
          { term: 'Aliases', description: character.aliases.join(', ') },
          { term: 'Titles', description: character.titles.join(', ') },
        ]}
      />

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => navigate(`/character/${extractId(character.url)}`)}
      >
        Learn more
      </Button>
    </Card>
  );
};

export default CharacterPreview;
