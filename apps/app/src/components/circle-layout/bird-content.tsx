import { Bird, Circle, ImageWrapper, Leave, Step, Twig } from './styles';
import Image from 'next/image';
interface Props {
  birdImage: string;
  step?: string;
}

export const BirdContentWrapper = ({ birdImage, step }: Props) => {
  return (
    <ImageWrapper>
      <Twig>
        <Image src="/images/twig.png" alt="twig" fill={true} />
      </Twig>
      <Circle color="white">
        <Bird>
          <Image
            src={`/images/birds/${birdImage}`}
            alt="bird"
            fill={true}
            key={birdImage}
          />
        </Bird>
        {step && (
          <Step>
            <p>{step}</p>
          </Step>
        )}
      </Circle>
      <Leave>
        <Image src="/images/leave.png" alt="leave" fill={true} />
      </Leave>
    </ImageWrapper>
  );
};
