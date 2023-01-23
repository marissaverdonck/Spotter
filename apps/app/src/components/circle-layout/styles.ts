import styled, { keyframes } from 'styled-components'
import theme from '../../styles/theme'

export const ImageWrapper = styled.div`
  position: relative;
  margin: 2rem auto 2rem auto;
  max-width: 30em;
`

export const Circle = styled.div`
  margin: 1em auto;
  width: 16rem;
  height: 16rem;
  text-align: center;
  background-color: ${props => `${theme.colors[props.color]}`};
  border-radius: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`

export const Step = styled.div`
  width: 5rem;
  height: 5rem;
  text-align: center;
  background-color: ${theme.colors.yellow};
  border-radius: 100%;
  padding: 1rem;
  position: absolute;
  left: -1rem;
  bottom: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const loadImage = keyframes`
0%{
  opacity: 0;
}
100% {
    opacity: 1;
  }
`

export const Bird = styled.div`
  width: 11rem;
  height: 11rem;
  vertical-align: middle;
  z-index:1;
  img {
    object-fit: contain;
    padding: 2rem;
    animation: ${loadImage} .5s ease-in;
  }
  }
`

export const Leave = styled.div`
  position: absolute;
  right: -2rem;
  top: -2rem;
  width: 9rem;
  height: 16rem;
  z-index:2;
    @media screen and (max-width: 350px) {
    z-index:0;
  }
}
`
export const Twig = styled.div`
  position: absolute;
  left: 0rem;
  bottom: 1rem;
  width: 5rem;
  height: 7rem;
`

export const ResultText = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`
