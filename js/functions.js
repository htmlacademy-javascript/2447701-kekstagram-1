//Функция для проверки, является ли строка палиндромом
// Идея: надо разбить слово или число, перевернуть и соединить. Регистр перевести в нижний/верхний

function definePalendrome(value) {
  value = value.toLowerCase();
  value = value.replace(/\s/g, "");
  const newValue = value.split("").reverse().join("");

  if (newValue === value) {
    return "Палиндром";
  }
  return "Непалиндром";
}
definePalendrome("топот");

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

function extractNumber(value) {
  let newValue = value + "";
  let newNumber = "";
  for (let i = 0; i < newValue.length; i++) {
    if (!isNaN(newValue[i])) {
      newNumber += newValue[i];
    }
  }
  const notSpaces = newNumber.replace(/\s/g, "");
  const resalt = Number(notSpaces);
  return resalt;
}

extractNumber("пример 007");

/*Функция, которая принимает три параметра:
исходную строку, минимальную длину и строку с добавочными символами
— и возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.*/

function changeString(sourceString, lengthString, additionalString) {
  let resalt = additionalString + sourceString;
  if (sourceString.length > lengthString) {
    let newResalt = sourceString;
    return newResalt;
  }
  if (resalt.length > lengthString) {
    let newOpenResalt = additionalString.slice(0, lengthString) + sourceString;
    return newOpenResalt;
  }
  return resalt;
}

changeString("q", 1, "werty");

/*Функция для проверки длины строки.
Она принимает строку, которую нужно проверить,
и максимальную длину и возвращает true,
если строка меньше или равна указанной длине,
и false, если строка длиннее.
Эта функция нам пригодится для валидации формы.*/

function checkingLength(string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}

checkingLength("Картошка вмундире", 15);

/*Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
Будет использоваться для генерации временных географических координат в следующем задании.*/

function getRandom(min, max, how) {
  const random = min + Math.random() * (max - min);
  let newRandom = random.toFixed(how);
  newRandom = Number(newRandom);
  return newRandom;
}

getRandom(1, 2, 3);
