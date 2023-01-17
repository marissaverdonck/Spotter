import styled from 'styled-components';

export const Header = styled.div`
  background-color: white;
  height: 3rem;
  @media (max-width: 480px) {
  }
`;

export const HeaderWrapper = styled.div`
  height: 3rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  margin: 2rem auto 2rem auto;
  padding: 0;
  max-width: 30rem;
`;

export const ListItem = styled.li`
  margin: 0 1rem 1rem 1rem;
  max-width: 30rem;
  overflow: hidden;
  display: flex;
`;

export const TextWrapper = styled.div`
  display: block;
  text-align: left;
  margin-left: 1rem;
`;
