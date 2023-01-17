import styled from 'styled-components';
import theme from '../../styles/theme';

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

export const GameLayout = styled.div`
  background-color: ${theme.colors.backgroundColor};
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const CloseImage = styled.img`
  position: fixed;
  left: 1rem;
  top: 1rem;
  width: 1rem;
  z-index: 5;
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

export const Square = styled.div`
  background-color: white;
  width: 7rem;
  height: 7rem;
  border-radius: 1rem;
  margin-right: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bird = styled.img`
  width: 6rem;
`;

export const TextWrapper = styled.div`
  display: block;
  text-align: left;
`;
