import Link from 'next/link';
import BirdSquare from '../../components/bird-square';
import Layout from '../../components/main-layout';
import { Header, HeaderWrapper, List, ListItem, TextWrapper } from './styles';

export function Overview() {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <img src="/images/menu.svg" alt="menu" width="20px" height="20px" />
          <h2>Spotter</h2>
          <img src="/images/logo.png" alt="logo" width="40px" height="40px" />
        </HeaderWrapper>
      </Header>
      <Layout title="overview">
        <List>
          <Link href="/game" passHref style={{ textDecoration: 'none' }}>
            <ListItem>
              <BirdSquare birdImage={'roodborst.png'} size="small" />
              <TextWrapper>
                <h3>1. Tuinvogels</h3>
                <p>Raad de vogel aan de hand van afbeeldingen en namen.</p>
              </TextWrapper>
            </ListItem>
          </Link>
          <Link href="/game" passHref style={{ textDecoration: 'none' }}>
            <ListItem>
              <BirdSquare birdImage={'bontbekplevier.png'} size="small" />
              <TextWrapper>
                <h3>2. Wadvogels</h3>
                <p>Raad de vogel aan de hand van afbeeldingen en namen.</p>
              </TextWrapper>
            </ListItem>
          </Link>
        </List>
      </Layout>
    </>
  );
}

export default Overview;
