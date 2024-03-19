const pictureContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const bodyContainer = document.querySelector('body');
const bigPictureImgContainer = document.querySelector('.big-picture__img img');
const likesCountContainer = document.querySelector('.likes-count');
const commentContainer = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const captionContainer = document.querySelector('.social__caption');
const commentsCount = document.querySelector('.comments-count');
const socialCommentLoader = document.querySelector('.social__comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');

const COMMENTS_STEP = 5;
let shownComments = 5;
let comments = [];

const closePopup = () => {
  bigPicture.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  socialCommentLoader.removeEventListener('click', onShowMoreButtonClick);
  socialCommentLoader.classList.remove('hidden');
  shownComments = 5;
};

const openPopup = () => {
  bigPicture.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
}

const createComments = (items) => {
  const commentsFragment = document.createDocumentFragment();

  items.forEach((comment) => {
    const commentCloned = commentContainer.cloneNode(true);
    commentCloned.querySelector('.social__picture').src = comment.avatar;
    commentCloned.querySelector('.social__picture').alt = comment.name;
    commentCloned.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(commentCloned);
  });
  commentsContainer.append(commentsFragment);
};

const renderSocialCommentsCount = () => {
  socialCommentCount.innerHTML = `${Math.min(
    shownComments,
    comments.length
  )} из <span class="comments-count">${comments.length}</span> комментариев`;
};

function onShowMoreButtonClick() {
  shownComments += COMMENTS_STEP;

  if (shownComments >= comments.length) {
    socialCommentLoader.classList.add('hidden');
  }

  createComments(
    comments.slice(
      shownComments - COMMENTS_STEP,
      Math.min(shownComments, comments.length)
    )
  );
  renderSocialCommentsCount();
}

const renderBigPicture = (picturesData) => {
  bigPictureImgContainer.src = picturesData.url;
  bigPictureImgContainer.alt = picturesData.description;
  likesCountContainer.textContent = picturesData.likes;
  captionContainer.textContent = picturesData.description;
  commentsCount.textContent = picturesData.comments.length;

  commentsContainer.innerHTML = '';
  comments = picturesData.comments;

  shownComments = Math.min(shownComments, picturesData.comments.length);

  if (shownComments >= picturesData.comments.length) {
    socialCommentLoader.classList.add('hidden');
  } else {
    socialCommentLoader.addEventListener('click', onShowMoreButtonClick);
  }

  createComments(picturesData.comments.slice(0, shownComments));
  renderSocialCommentsCount();
};

const openPicturePopup = (data) => {
  openPopup();
  renderBigPicture(data);
};

const initGallery = (pictures) => {
  pictureContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-picture-id]');
    if (!thumbnail) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.pictureId
    );
    openPicturePopup(picture);
  });
  closeBigPicture.addEventListener('click', () => closePopup());
};

export { initGallery };
