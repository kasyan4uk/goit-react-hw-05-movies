import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  padding: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  margin-left: 15px;
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 0;
  color: black;
  font-size: 18px;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
