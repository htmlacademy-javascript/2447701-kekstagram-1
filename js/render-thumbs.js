const pictureListContainer = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const renderPictures = (pictures) => {
  const pictureFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__comments').textContent =
      picture.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;

    pictureFragment.appendChild(pictureElement);
  });

  pictureListContainer.append(pictureFragment);
};

export { renderPictures };
