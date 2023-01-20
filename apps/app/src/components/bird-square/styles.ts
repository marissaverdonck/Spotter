import styled from 'styled-components'

export const Square = styled.div.attrs((props: { size: string }) => ({
  size:
    props.size === 'medium' ? '10rem' : props.size === 'small' ? '8rem' : '8rem'
}))`
  background-color: white;
  min-width: ${props => `${props.size}`};
  min-height: ${props => `${props.size}`};
  width: ${props => `${props.size}`};
  height: ${props => `${props.size}`};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

  img {
    object-fit: contain;
    padding: 1rem;
  }
`
