export const computeResult = (
  userSelectedSubjects,
  correctAnswers,
  questions
) => {
  let subOne = questions.filter(question => {
    return question.name === userSelectedSubjects[0];
  });
  let subTwo = questions.filter(question => {
    return question.name === userSelectedSubjects[1];
  });
  let subThree = questions.filter(question => {
    return question.name === userSelectedSubjects[2];
  });
  let subFour = questions.filter(question => {
    return question.name === userSelectedSubjects[3];
  });

  //Retrieves correctly answered questions
  let subOneCorrect = subOne.filter(question => {
    return question.answer === "" + question.selectedOption;
  });
  let subTwoCorrect = subTwo.filter(question => {
    return question.answer === "" + question.selectedOption;
  });
  let subThreeCorrect = subThree.filter(question => {
    return question.answer === "" + question.selectedOption;
  });
  let subFourCorrect = subFour.filter(question => {
    return question.answer === "" + question.selectedOption;
  });

  let myResults = {
    subOne: {
      name: userSelectedSubjects[0],
      correct: subOneCorrect.length,
      wrong: subOne.length - subOneCorrect.length
    },
    subTwo: {
      name: userSelectedSubjects[1],
      correct: subTwoCorrect.length,
      wrong: subTwo.length - subTwoCorrect.length
    },
    subThree: {
      name: userSelectedSubjects[2],
      correct: subThreeCorrect.length,
      wrong: subThree.length - subThreeCorrect.length
    },
    subFour: {
      name: userSelectedSubjects[3],
      correct: subFourCorrect.length,
      wrong: subFour.length - subFourCorrect.length
    },
    total: {
      score: correctAnswers.length
    },
    date: new Date().getTime()
  };

  return myResults;
};
