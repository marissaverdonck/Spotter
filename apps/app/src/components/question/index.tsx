import { Birds } from '@spotter/shared-types';
import { useEffect, useState } from 'react';
import { Button } from '../button';
import { BirdContentWrapper } from '../circle-layout/bird-content';
import { ButtonList, TextWrapper, Title } from './styles';
import { getAnswerOptions } from './utils/get-answer-options';

interface Props {
  step: number;
  setStep: (value: number) => void;
  birds: Birds[];
  setResult: (value: Birds[]) => void;
}

export function Question({ birds, step, setStep, setResult }: Props) {
  const [answerOptions, setAnswerOptions] = useState([]);

  useEffect(() => {
    const birdNames = birds.map((bird) => bird.name);
    setAnswerOptions(getAnswerOptions(birdNames, 2, birds[step].name));
  }, [birds, step]);

  function setGameResult(answer: boolean) {
    birds[step].result = answer;
    setResult(birds);
  }

  function checkValue(event) {
    if (event.target.innerText === birds[step].name) {
      setGameResult(true);
      setStep(step + 1);
    } else {
      setGameResult(false);
      setStep(step + 1);
    }
  }

  return (
    <>
      <BirdContentWrapper
        birdImage={birds[step].image}
        step={`${step + 1}/${birds.length}`}
      />
      <TextWrapper>
        <Title>Welke vogel is dit?</Title>
        <ButtonList>
          {answerOptions.map((option: string) => {
            return (
              <Button
                key={option}
                onClick={(event: any) => {
                  checkValue(event);
                }}
              >
                {option}
              </Button>
            );
          })}
        </ButtonList>
      </TextWrapper>
    </>
  );
}

//
export default Question;
