export function getAnswerOptions (array, amount, rightAnswer) {
  function optionsExcludeRightAnswer () {
    const index = array.indexOf(rightAnswer);
    if (index > -1) {
      array.splice(index, 1);
      return array;
    }
  }
  function optionsIncludeRightAnswer (options) {
    options.push(rightAnswer);
    return options;
  }

  const options = optionsExcludeRightAnswer();
  const shuffledOptions = [...options].sort(() => 0.5 - Math.random());
  const randomOptions = shuffledOptions.slice(0, amount);
  const optionsWithAnswer = optionsIncludeRightAnswer(randomOptions);
  const shuffleNewOptions = optionsWithAnswer.sort();

  return shuffleNewOptions;
}
