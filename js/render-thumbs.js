const pictureListContainer = document.querySelector('.pictures');
const pictureListAll = document.querySelectorAll('.picture');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const renderPictures = (pictures) => {
  const pictureFragment = document.createDocumentFragment();
  for (let i = 0; i < pictureListAll.length; i++) {
    pictureListAll.remove();
  }
  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__comments').textContent =
      picture.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.dataset.pictureId = picture.id;

    pictureFragment.appendChild(pictureElement);
  });
  pictureListContainer
    .querySelectorAll('.picture')
    .forEach((element) => element.remove());

  pictureListContainer.append(pictureFragment);
};

export { renderPictures };
