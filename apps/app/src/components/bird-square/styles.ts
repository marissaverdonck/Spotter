import styled from 'styled-components';

export const Square = styled.div.attrs((props: { size: string }) => ({
  size: props.size === 'medium' ? '10rem' : props.size === 'small' ? '8rem' : '8rem',
}))`
  background-color: white;
  width: ${(props) => `${props.size}`};
  height: ${(props) => `${props.size}`};
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${(props) => `calc(${props.size} - 1rem)`};
  }
`;
