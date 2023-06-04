import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  width: 90px;
  height: 22px;
  border: 1px solid orange;
  border-radius: 6px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: inherit;
  background-color: orange;
  color: black;
  &:hover {
    background-color: grey;
    color: white;
    border-color: grey;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
`;

export const Poster = styled.img`
  height: 300px;
`;

export const InfoThumb = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilmTitle = styled.h2`
  font-size: 22px;
`;

export const TextTitle = styled.h3`
  font-size: 18px;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

export const InfoTitle = styled.p`
  margin: 15px 0;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 20px;
  border-bottom: 2px solid black;
  padding-bottom: 30px;
  margin-left: 15px;
`;

export const StyledLink = styled(NavLink)`
  .active {
    color: orange;
  }
  color: blue;
  &:hover {
    color: orange;
    text-decoration: none;
  }
`;
