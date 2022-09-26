import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';
import CharacterPage from './pages/CharacterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/books" replace />,
  },
  {
    path: '/books',
    element: <BooksPage />,
  },
  {
    path: '/book/:id',
    element: <BookPage />,
  },
  {
    path: '/character/:id',
    element: <CharacterPage />,
  },
]);

const App = () => {
  return (
    <MantineProvider
      theme={{ colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
