import { Anchor, Container, Divider, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <header>
      <Container py="md">
        <Group>
          <Text size="xl">A Test of Ice and Fire</Text>
          <Divider orientation="vertical" />
          <Anchor component={Link} to="/">
            Homepage
          </Anchor>
        </Group>
      </Container>
    </header>
    <main>
      <Container>{children}</Container>
    </main>
  </div>
);

export default Layout;
