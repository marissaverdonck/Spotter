import { Circle, ImageWrapper, Leave, Twig, ResultText } from './styles';
import Image from 'next/image';
interface Props {
  result: number;
}

export const ResultContentWrapper = ({ result }: Props) => {
  return (
    <ImageWrapper>
      <Twig>
        <Image src="/images/twig.png" alt="twig" fill={true} />
      </Twig>
      <Circle color="yellow">
        <ResultText>
          <h1>Gefeliciteerd</h1>
          <p>{`Je hebt ${result} ${
            result === 1 ? 'vogel' : 'vogels'
          } herkend uit de categorie tuinvogels`}</p>
        </ResultText>
      </Circle>
      <Leave>
        <Image src="/images/leave.png" alt="leave" fill={true} />
      </Leave>
    </ImageWrapper>
  );
};
