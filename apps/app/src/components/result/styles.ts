import styled from 'styled-components'

export const List = styled.ul`
  margin: 2rem auto 1rem auto;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 30rem;
  justify-content: center;
  list-style-type: none;
  column-gap: 1rem;
  row-gap: 0.5rem;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonSpace = styled.div`
  margin: 0 auto 8rem auto;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 10rem;
  word-break: break-word;
`

export const AnswerResult = styled.img`
  margin-left: 0.5rem;
  width: 1rem;
  height: 1rem;
`
