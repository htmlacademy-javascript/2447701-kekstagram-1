const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const getRandomIntegerArray = (a, b) => {
  const arrayRandom = [];

  function inner() {
    let result = getRandomInteger(a, b);

    while (arrayRandom.includes(result)) {
      result = getRandomInteger(a, b);
    }
    arrayRandom.push(result);
    return result;
  }
  return inner;
};

export { getRandomInteger };
export { getRandArrayElement };
export { getRandomIntegerArray };
