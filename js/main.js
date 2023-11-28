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

const uniqueIdGenerator = getRandomIntegerArray(1, 25);
const uniquePhotoGenerator = getRandomIntegerArray(1, 25);

const createComment = () => ({
  comments: {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandArrayElement(MESSAGE),
    name: getRandArrayElement(NAMES),
  },
});

const createComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomInteger(0, 6); i++) {
    const comment = createComment();
    comments.push(comment);
  }
  return comments;
};

const createPicture = () => ({
  id: uniqueIdGenerator(),
  url: `photos/${uniquePhotoGenerator()}.jpg`,
  description: 'Просто красиво!',
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

const createPictures = () => {
  const pict = [];

  for (let i = 0; i < PICTURES_COUNT; i++) {
    const picture = createPicture();
    pict.push(picture);
  }
  return pict;
};

const pictures = createPictures();

console.log(pictures);
