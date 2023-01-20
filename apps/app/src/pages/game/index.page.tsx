import { Birds } from '@spotter/shared-types';
import { useState } from 'react';
import Question from '../../components/question';
import Result from '../../components/result';
import Layout from '../../components/main-layout';
import { CloseImage, GameLayout } from './styles';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
export function Index({ birds }: { birds: Birds[] }) {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(birds);

  return (
    <Layout title="game">
      <GameLayout title="welcome">
        <Link href="/overview" passHref style={{ textDecoration: 'none' }}>
          <CloseImage src="/images/cross.svg" />
        </Link>
        {step !== birds.length ? (
          <Question
            birds={birds}
            step={step}
            setStep={setStep}
            setResult={setResult}
          />
        ) : (
          <Result result={result} />
        )}
      </GameLayout>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'apps/api/src', 'birds.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return { props: { birds: data.birds } };
}

export default Index;
