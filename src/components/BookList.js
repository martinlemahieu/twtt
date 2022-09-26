import { Grid } from '@mantine/core';
import BookPreview from './BookPreview';

const BookList = ({ books }) => {
  return (
    <>
      <Grid>
        {books.map((book, index) => (
          <Grid.Col key={index} xs={12} sm={6} md={4}>
            <BookPreview book={book} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default BookList;
