import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledLink, Header, Nav } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default SharedLayout;
