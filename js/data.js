import { getRandomInteger } from './util.js';
import { getRandomIntegerArray } from './util.js';
import { getRandArrayElement } from './util.js';

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

export { pictures };
