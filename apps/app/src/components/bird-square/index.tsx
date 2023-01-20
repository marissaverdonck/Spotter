import { Square } from './styles';
import Image from 'next/image';
interface Props {
  birdImage: string;
  size: string;
}

export function BirdSquare({ birdImage, size }: Props) {
  return (
    <Square size={size}>
      <Image src={`/images/birds/${birdImage}`} alt="bird" fill={true} />
    </Square>
  );
}

export default BirdSquare;
