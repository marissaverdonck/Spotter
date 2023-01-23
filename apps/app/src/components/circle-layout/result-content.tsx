import { Birds } from '@spotter/shared-types';
import { Circle, ImageWrapper, Leave, Twig, ResultText } from './styles';
import Image from 'next/image';
interface Props {
  result: Birds[];
}

export const ResultContentWrapper = ({ result }: Props) => {
  function amountOfRightAnswers() {
    const filterItems = result.filter((bird) => bird.result === true);
    return filterItems.length;
  }

  return (
    <ImageWrapper>
      <Twig>
        <Image src="/images/twig.png" alt="twig" fill={true} />
      </Twig>
      <Circle color="yellow">
        <ResultText>
          <h1>Gefeliciteerd</h1>
          <p>{`Je hebt ${amountOfRightAnswers()} van de ${result.length}  ${
            amountOfRightAnswers() === 1 ? 'vogel' : 'vogels'
          } herkend uit de categorie tuinvogels`}</p>
        </ResultText>
      </Circle>
      <Leave>
        <Image src="/images/leave.png" alt="leave" fill={true} />
      </Leave>
    </ImageWrapper>
  );
};
