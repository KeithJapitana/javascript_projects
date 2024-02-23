const dolphinScore = (96 + 108 + 89) / 3;
const koalaScore = (97 + 112 + 101) / 3;

const minScore = 100;

if (dolphinScore > koalaScore && dolphinScore >= minScore) {
  console.log(
    `Dolphine has a Higher score of ${dolphinScore.toFixed(
      2
    )} compare to Koala and pass the minimum score`
  );
} else if (koalaScore > dolphinScore && koalaScore >= minScore) {
  console.log(
    `Koala has a Higher score of ${koalaScore.toFixed(
      2
    )} compare to Dolphine and pass the minimum score`
  );
} else if (koalaScore && dolphinScore >= minScore) {
  console.log(
    `Koala and Dolphine has the same score so its a TIE! and pass the minimum score`
  );
} else {
  console.log(
    `Both team lose because did not pass the minimum score required!`
  );
}
