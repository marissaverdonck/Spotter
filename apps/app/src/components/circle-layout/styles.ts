import styled from 'styled-components'
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

export const Bird = styled.div`
  width: 11rem;
  height: 11rem;
  vertical-align: middle;
  img {
    object-fit: contain;
    padding: 2rem;
  }
  }
`

export const Leave = styled.div`
  position: absolute;
  right: -2rem;
  top: -2rem;
  width: 9rem;
  height: 16rem;
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
