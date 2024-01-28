const pictureContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const socialCountContainer = document.querySelector('.social__comment-count');
const commentLoaderContainer = document.querySelector('.comments-loader');
const bodyContainer = document.querySelector('body');
const bigPictureImgContener = document.querySelector('.big-picture__img img');
const likesCountContener = document.querySelector('.likes-count');
const socialCaptionContener = document.querySelector('.social__caption');
const comment = document.querySelector('.social__comment');

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    socialCountContainer.classList.remove('hidden');
    commentLoaderContainer.classList.remove('hidden');
    bodyContainer.classList.remove('modal-open');
  }
};

const createComment = (data) => {
  const commentsFragment = document.createDocumentFragment();

  data.forEach((picture) => {
    const commentCloned = comment.cloneNode(true);
    commentCloned.querySelector('.social__picture').src = picture.avatar;
    commentCloned.querySelector('.social__picture').alt = picture.message;
    commentCloned.querySelector('.social__text').textContent = picture.name;

    commentsFragment.appendChild(commentCloned);
  });
  comment.after(commentsFragment);
};

const openPicturesPopup = (data) => {
  bigPicture.classList.remove('hidden');
  socialCountContainer.classList.add('hidden');
  commentLoaderContainer.classList.add('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  bigPictureImgContener.src = data.url;
  bigPictureImgContener.alt = data.description;
  likesCountContener.textContent = data.likes;
  socialCaptionContener.textContent = data.description;
  createComment(data.comments);
};

const renderGallery = (pictures) => {
  pictureContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-pict-id]');
    if (!thumbnail) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.pictId
    );
    openPicturesPopup(picture);
  });
};

const closePicturesPopup = () => {
  closeBigPicture.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    socialCountContainer.classList.remove('hidden');
    commentLoaderContainer.classList.remove('hidden');
    bodyContainer.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
};

export { renderGallery, closePicturesPopup };
