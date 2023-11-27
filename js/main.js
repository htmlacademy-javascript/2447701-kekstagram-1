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
];

const PICTURES_COUNT = 25;

const PICTURE = [];
const COMMENTS = [];

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

const uniqueGenerator = getRandomIntegerArray(1, 25);

const createPicture = () => ({
  id: uniqueGenerator(),
  url: `photos/${uniqueGenerator()}/jpg`,
  description: 'Просто красиво!',
  likes: getRandomInteger(15, 200),
});

const createComments = () => ({
  comments: {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandArrayElement(MESSAGE),
    name: getRandArrayElement(NAMES),
  },
});

for (let i = 0; i < PICTURES_COUNT; i++) {
  PICTURE.push(createPicture());
}

console.log(PICTURE);

for (let i = 0; i < PICTURES_COUNT; i++) {
  COMMENTS.push(createComments());
}

PICTURE.push(COMMENTS);

console.log(COMMENTS);
console.log(PICTURE);
