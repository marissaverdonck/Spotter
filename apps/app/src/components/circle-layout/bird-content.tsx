import { Bird, Circle, ImageWrapper, Leave, Step, Twig } from './styles';

interface Props {
  birdImage: string;
  step?: string;
}

export const BirdContentWrapper = ({ birdImage, step }: Props) => {
  return (
    <ImageWrapper>
      <Twig src="/images/twig.png" alt="twig" />
      <Circle color="white">
        <Bird src={`/images/${birdImage}`} alt="bird" />
        {step && (
          <Step>
            <p>{step}</p>
          </Step>
        )}
      </Circle>
      <Leave src="/images/leave.png" alt="leave" />
    </ImageWrapper>
  );
};
