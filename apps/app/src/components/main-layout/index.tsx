import Head from 'next/head';
import { Fragment, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const MainLayout = styled.div`
  margin: 0 auto;
  padding: 0rem;
  max-width: 100vw;
  overflow: hidden;
  @media (max-width: 480px) {
  }
`;

export default function Layout({ title, children }: PropsWithChildren<Props>) {
  return (
    <Fragment>
      <Head>
        <title>{`${title}`}</title>
      </Head>
      <MainLayout>{children}</MainLayout>
    </Fragment>
  );
}
