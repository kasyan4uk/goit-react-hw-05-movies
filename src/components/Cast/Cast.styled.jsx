import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

export const Item = styled.li`
  display: flex;
  /* flex-direction: column; */
  gap: 5px;
`;

export const Photo = styled.img`
  height: 100px;
  width: auto;
`;

export const Text = styled.p`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;
