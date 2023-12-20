import { Link, Outlet } from 'react-router-dom';
import { Container, Heading, Stack } from '@chakra-ui/react';

function RootLayout() {
  return (
    <Container
      maxWidth={{
        xl: 'container.xl',
        lg: 'container.lg',
        md: 'container.md',
        sm: 'container.sm',
      }}
      py="18px"
    >
      <Stack>
        <Heading as={Link} to="/" size="sm" fontWeight={500}>
          Home
        </Heading>

        <Outlet />
      </Stack>
    </Container>
  );
}

export default RootLayout;
