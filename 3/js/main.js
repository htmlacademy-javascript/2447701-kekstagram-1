// Кексограм

const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];

const NAMES = [
  'Елизавета',
  'Мина',
  'Валерия',
  'Анна',
  'Мелания',
  'Александра',
  'Серафима',
  'Агата',
  'Анастасия',
  'Евдокия',
  'Ирина',
  'Дарина',
  'Яков',
  'Антон',
  'Иван',
  'Василий',
  'Максим',
  'Леонид',
  'Арсений',
  'Тихон',
  'Тарас',
  'Никита',
  'Кирилл',
  'Валерий',
  'Михаил',
  'Нестор',
  'Виктор',
  'Тимофей',
  'Артём',
  'Дмитрий',
  'Назар',
];

const SIMILAR_OBJ_PROM = 25;

const getRandomIntegerArray = (a, b) => {
  const arrayRandom = [];

  function f() {
    const result = Math.floor(Math.random() * (b - a + 1) + a);

    while (arrayRandom.includes(result) === false) {
      arrayRandom.push(result);
    }
    return arrayRandom.at(-1);
  }
};

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const createObjProm = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}/jpg`,
  description: 'Просто красиво!',
  likes: getRandomInteger(15, 200),
  comments: {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandArrayElement(MESSAGE),
    name: getRandArrayElement(NAMES),
  },
});

const similarObjProm = Array.from({ length: SIMILAR_OBJ_PROM }, createObjProm);

console.log(similarObjProm);

// кексобукинг

const arrTitle = [
  'Время быть первым!',
  'Лучше поздо чем никогда!',
  'Быть войном жить вечно!',
];

const arrType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const arrCheckingAndCheckout = ['12:00', '13:00', '14:00'];

const arrFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const arrDescription = [
  'Что то описать, но что',
  'Придумай придумай',
  'Думы думал',
];

const arrPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const GENERATOR_COUNT = 10;

const featuresRandom = new Array(
  arrFeatures[Math.floor(Math.random() * arrFeatures.length)]
);

const photoRandom = new Array(
  arrPhotos[Math.floor(Math.random() * arrPhotos.length)]
);

const getRandomLoc = (min, max, how) => {
  const random = min + Math.random() * (max - min);
  const newRandom = random.toFixed(how);
  return newRandom;
};

const avatarCan = getRandomInteger(1, 10);

const getAvatar = () => {
  if (avatarCan < 10) {
    const gen = `img/avatars/user0${avatarCan}.png`;
    return gen;
  } else {
    const newGen = `img/avatars/user${avatarCan}.png`;
    return newGen;
  }
};

const NEW_OBJ_KEKSTOBOK = () => ({
  author: {
    avatar: getAvatar(avatarCan),
  },
  offer: {
    title: getRandArrayElement(arrTitle),
    address: {
      lat: getRandomLoc(35.65, 35.7, 5),
      lng: getRandomLoc(139.7, 139.8, 5),
    },
    price: getRandomInteger(1, 30),
    type: getRandArrayElement(arrType),
    rooms: getRandomInteger(1, 15),
    guests: getRandomInteger(1, 12),
    checking: getRandArrayElement(arrCheckingAndCheckout),
    checkout: getRandArrayElement(arrCheckingAndCheckout),
    features: featuresRandom,
    description: getRandArrayElement(arrDescription),
    photos: photoRandom,
  },
  location: {
    lat: getRandomLoc(35.65, 35.7, 5),
    lng: getRandomLoc(139.7, 139.8, 5),
  },
});

const generationNewArrKeksobok = Array.from(
  { length: GENERATOR_COUNT },
  NEW_OBJ_KEKSTOBOK
);

console.log(generationNewArrKeksobok);
