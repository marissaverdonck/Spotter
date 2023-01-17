import { Circle, ImageWrapper, Leave, Twig, ResultText } from './styles';

interface Props {
  result: number;
}

export const ResultContentWrapper = ({ result }: Props) => {
  return (
    <ImageWrapper>
      <Twig src="/images/twig.png" alt="twig" />
      <Circle color="yellow">
        <ResultText>
          <h1>Gefeliciteerd</h1>
          <p>{`Je hebt ${result} ${result === 1 ? 'vogel' : 'vogels'} herkend uit de categorie tuinvogels`}</p>
        </ResultText>
      </Circle>
      <Leave src="/images/leave.png" alt="leave" />
    </ImageWrapper>
  );
};
