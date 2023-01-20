import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Button } from '../components/button';
import Layout from '../components/main-layout';
import Link from 'next/link';
import { BirdContentWrapper } from '../components/circle-layout/bird-content';

const TextWrapper = styled.div`
  margin: 1rem;
  text-align: center;
`;

export function Index() {
  return (
    <Layout title="welcome">
      <BirdContentWrapper birdImage="appelvink.png" />
      <TextWrapper>
        <h1>Leer vogels herkennen</h1>
        <p style={{ marginBottom: '2rem' }}>
          Leer vogels herkennen aan de hand van beeld en geluid.
        </p>
        <Link href="/overview" passHref style={{ textDecoration: 'none' }}>
          <Button>Start</Button>
        </Link>
      </TextWrapper>
    </Layout>
  );
}

//
export default Index;
