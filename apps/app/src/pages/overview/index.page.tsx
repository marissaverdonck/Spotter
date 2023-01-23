import Link from 'next/link';
import BirdSquare from '../../components/bird-square';
import Layout from '../../components/main-layout';
import { Header, HeaderWrapper, List, ListItem, TextWrapper } from './styles';
import Image from 'next/image';

export function Overview() {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <div>
            {/* <Image src="/images/menu.svg" alt="menu" width="20" height="20" /> */}
          </div>
          <h2>Spotter</h2>
          <Image src="/images/logo.png" alt="logo" width="40" height="40" />
        </HeaderWrapper>
      </Header>
      <Layout title="overview">
        <List>
          <Link
            href="/game/tuinvogels"
            passHref
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <BirdSquare birdImage={'roodborst.png'} size="medium" />
              <TextWrapper>
                <h3>1. Tuinvogels</h3>
                <p>Raad de vogel aan de hand van afbeeldingen.</p>
              </TextWrapper>
            </ListItem>
          </Link>
          <Link
            href="/game/wadvogels"
            passHref
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <BirdSquare birdImage={'bontbekplevier.png'} size="medium" />
              <TextWrapper>
                <h3>2. Wadvogels</h3>
                <p>Raad de vogel aan de hand van afbeeldingen.</p>
              </TextWrapper>
            </ListItem>
            <ListItem>
              <BirdSquare birdImage={'blauwborst.png'} size="medium" />
              <TextWrapper>
                <h3>3. Tuinvogels </h3>
                <p>Raad de vogel aan de hand van geluid.</p>
              </TextWrapper>
            </ListItem>
          </Link>
        </List>
      </Layout>
    </>
  );
}

export default Overview;
