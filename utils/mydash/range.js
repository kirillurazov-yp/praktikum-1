function range(start, end, step) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if (step === undefined) {
    if (end < 0) {
      step = -1;
    } else {
      step = 1;
    }
  }

  const resultArr = [];
  for (
    let i = start;
    step === 0 ? resultArr.length < Math.abs(end) : Math.abs(i) < Math.abs(end);
    i += step
  ) {
    resultArr.push(i);
  }

  return resultArr;
}
