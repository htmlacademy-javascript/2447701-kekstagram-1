const definePalindrome = (string) => {
  const str = string.toLowerCase().replace(/\s/g, "");
  const newValue = str.split("").reverse().join("");

  return newValue === str;
};
definePalindrome("топот");

const extractNumber = (strOrNumber) => {
  const newValue = `${strOrNumber} `;
  let newNumber = "";

  for (let i = 0; i < newValue.length; i++) {
    if (!isNaN(newValue[i])) {
      newNumber += newValue[i];
    }
  }

  const notSpaces = newNumber.replace(/\s/g, "");
  const result = Number(notSpaces);

  return result;
};

extractNumber("пример 007");

const changeString = (sourceString, lengthString, additionalString) => {
  const result = additionalString + sourceString;

  if (sourceString.length > lengthString) {
    const newResult = sourceString;

    return newResult;
  }

  if (result.length > lengthString) {
    const newOpenResult =
      additionalString.slice(0, lengthString) + sourceString;

    return newOpenResult;
  }

  if (result.length < lengthString) {
    const openResult =
      additionalString.slice(0, lengthString - result.length) + result;

    return openResult;
  }

  return result;
};

changeString("q", 4, "we");

const checkingLength = (str, length) => str.length <= length;

checkingLength("Картошка вмундире", 15);

const getRandom = (min, max, how) => {
  const random = min + Math.random() * (max - min);
  let newRandom = random.toFixed(how);
  newRandom = Number(newRandom);
  return newRandom;
};

getRandom(1, 2, 3);
