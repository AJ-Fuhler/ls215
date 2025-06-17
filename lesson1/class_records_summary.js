let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const sum = numbers => numbers.reduce((sum, number) => sum + number);

const getAverage = numbers => sum(numbers) / numbers.length;

const getTotalExerciseScore = exercises => sum(exercises);

const getFinalPercentGrade = (examAverage, totalExerciseScore) => {
  return Math.round((examAverage * .65) + (totalExerciseScore * .35));
};

const getLetterGrade = percentGrade => {
  if (percentGrade >= 93 && percentGrade <= 100) {
    return 'A';
  } else if (percentGrade >= 85) {
    return 'B';
  } else if (percentGrade >= 77) {
    return 'C';
  } else if (percentGrade >= 69) {
    return 'D';
  } else if (percentGrade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
};

const getStudentScore = scoreObj => {
  const examAverage = getAverage(scoreObj.exams);
  const totalExerciseScore = getTotalExerciseScore(scoreObj.exercises)
  const percentGrade = getFinalPercentGrade(examAverage, totalExerciseScore);
  const letterGrade = getLetterGrade(percentGrade);

  return `${percentGrade} (${letterGrade})`;
};

const transpose = array => {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]); // try to understand this
  });
};

const getExamSummary = examData => {
  scoresPerExam = transpose(examData);
  return scoresPerExam.map(examScores => {
    return {
      average: parseFloat(getAverage(examScores).toFixed(1)),
      minimum: Math.min(...examScores),
      maximum: Math.max(...examScores),
    };
  });
};

const generateClassRecordSummary = scores => {
  const scoreData = Object.keys(scores).map(student => scores[student].scores);

  const examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }