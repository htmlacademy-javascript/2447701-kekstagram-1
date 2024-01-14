import { createPictures } from './data.js';
const pictureListElement = document.querySelector('.img-upload__wrapper');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const getPicture = createPictures();
const getListFragment = document.createDocumentFragment();

getPicture.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__comments').textContent =
    picture.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  getListFragment.appendChild(pictureElement);
});

const pictureCreate = pictureListElement.append(getListFragment);
console.log(pictureCreate);

// export { pictureCreate };
