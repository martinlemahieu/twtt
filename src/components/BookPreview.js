import { Button, Card, createStyles, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { extractId } from '../lib/helpers';

const useStyles = createStyles(() => ({
  infoList: {
    '& > dt': {
      fontWeight: 'bold',
    },
    '& > dd': {
      marginLeft: '1em',
    },
  },
}));

const BookPreview = ({ book }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Text>
          <strong>{book.name}</strong>
        </Text>
      </Card.Section>

      <dl className={classes.infoList}>
        <dt>Author</dt>
        <dd>{book.authors.join(', ')}</dd>

        <dt>ISBN</dt>
        <dd>{book.isbn}</dd>

        <dt>Pages</dt>
        <dd>{book.numberOfPages}</dd>
      </dl>

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
