/*function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}*/

function getAverage(scores) {
    let avg = 0;

    for (let i = 0; i < scores.length; i++) {
        avg += scores[i];
    }
    return avg / scores.length;
}

console.log(getAverage([90, 98, 88, 100, 100, 86, 98]));

/*function getGrade(score) {
if (score === 100 ) {
  return "A++";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}*/

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(56));

/*function hasPassingGrade(score) {
  let letterScore = getGrade(score);
  if (letterScore === "F") {
    return false;
  } else {
    return true;
  }
}*/

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));

function studentMsg(totalScores, studentScore) {
let avg = getAverage(totalScores);
let sSc = getGrade(studentScore);
    if (sSc === "F") {
        return "Class average: " + avg + ". Your grade: " + sSc + ". You failed the course."
    } else {
        return "Class average: " + avg + ". Your grade: " + sSc + ". You passed the course."
    }
}