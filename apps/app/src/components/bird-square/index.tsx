import { Square } from './styles';

interface Props {
  birdImage: string;
  size: string;
}

export function BirdSquare({ birdImage, size }: Props) {
  return (
    <Square size={size}>
      <img src={`/images/${birdImage}`} alt="bird" />
    </Square>
  );
}

export default BirdSquare;
