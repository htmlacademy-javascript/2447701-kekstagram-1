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
let showComments = 5;

const closePopup = () => {
  bigPicture.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
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

const createComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentCloned = commentContainer.cloneNode(true);
    commentCloned.querySelector('.social__picture').src = comment.avatar;
    commentCloned.querySelector('.social__picture').alt = comment.name;
    commentCloned.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(commentCloned);
  });
  commentsContainer.append(commentsFragment);
};

function renderSocialCommentsCount(picturesData) {
  socialCommentCount.innerHTML = `${showComments} из <span class="comments-count">${picturesData.comments.length}</span> комментариев`;
}

const onShowMoreButtonClick = (comments, data) => {
  showComments += COMMENTS_STEP;

  if (showComments >= comments.length) {
    socialCommentLoader.classList.add('hidden');
    showComments = comments.length;
  } else {
    socialCommentLoader.classList.remove('.hidden');
    createComments(
      comments.slice(
        showComments - COMMENTS_STEP,
        Math.min(showComments, comments.length)
      )
    );
  }
  renderSocialCommentsCount(data);
};

const renderBigPicture = (picturesData) => {
  bigPictureImgContainer.src = picturesData.url;
  bigPictureImgContainer.alt = picturesData.description;
  likesCountContainer.textContent = picturesData.likes;
  captionContainer.textContent = picturesData.description;
  commentsCount.textContent = picturesData.comments.length;

  commentsContainer.innerHTML = '';

  createComments(picturesData.comments.slice(0, showComments));
  renderSocialCommentsCount(picturesData);
  socialCommentLoader.addEventListener('click', () =>
    onShowMoreButtonClick(picturesData.comments, picturesData)
  );
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
