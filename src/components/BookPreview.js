import { Button, Card, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { extractId } from '../lib/helpers';
import InfoList from './InfoList';

const BookPreview = ({ book }) => {
  const navigate = useNavigate();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Text>
          <strong>{book.name}</strong>
        </Text>
      </Card.Section>

      <InfoList
        infos={[
          { term: 'Author', description: book.authors.join(', ') },
          { term: 'ISBN', description: book.isbn },
          { term: 'Pages', description: book.numberOfPages },
        ]}
      />

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => navigate(`/book/${extractId(book.url)}`)}
      >
        Learn more
      </Button>
    </Card>
  );
};

export default BookPreview;
