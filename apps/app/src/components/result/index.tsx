import { Birds } from '@spotter/shared-types';
import { ResultContentWrapper } from '../circle-layout/result-content';
import BirdSquare from '../bird-square';
import { Button } from '../button';
import {
  List,
  ListItem,
  ButtonSpace,
  AnswerResult,
  TextWrapper,
} from './styles';
import Link from 'next/link';

interface Props {
  result: Birds[];
}

export function Result({ result }: Props) {
  return (
    <>
      <ResultContentWrapper result={result} />
      <List>
        {result.map((bird) => {
          return (
            <ListItem key={bird.id}>
              <BirdSquare birdImage={bird.image} size="medium"></BirdSquare>
              <TextWrapper>
                <p>{bird.name}</p>
                {bird.result ? (
                  <AnswerResult src={`/images/good.png`} alt="good" />
                ) : (
                  <AnswerResult src={`/images/false.png`} alt="false" />
                )}
              </TextWrapper>
            </ListItem>
          );
        })}
      </List>
      <ButtonSpace>
        <Link href="/overview" passHref style={{ textDecoration: 'none' }}>
          <Button>Terug naar speloverzicht</Button>
        </Link>
      </ButtonSpace>
    </>
  );
}

export default Result;
