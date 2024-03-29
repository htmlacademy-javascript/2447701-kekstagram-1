import { resetScale } from './scale.js';
import { resetEffect } from './effect.js';
import { sendData } from './api.js';
import { showErrorPopup, showSuccessPopup } from './popups.js';

const MAX_HASHTAG = 5;
const VALID_PATTERN = /^#[a-za-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const bodyContainer = document.querySelector('body');
const closeImgUpload = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const hashtagContainer = document.querySelector('.text__hashtags');
const commentContainer = document.querySelector('.text__description');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});
const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const isValidTag = (tag) => VALID_PATTERN.test(tag);

const checkCount = (tags) => tags.length <= MAX_HASHTAG;

const checkUniqueTag = (tags) => tags.length === new Set(tags).size;

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);

  return checkUniqueTag(tags) && checkCount(tags) && tags.every(isValidTag);
};

const isCommentHashtagFocus = () =>
  document.activeElement === commentContainer ||
  document.activeElement === hashtagContainer;

const openPopupImg = () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onPopupImgEscKeydown);
};

const closePopupImg = () => {
  imgUploadOverlay.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupImgEscKeydown);
  form.reset();
  pristine.reset();
  resetScale();
  resetEffect();
};

function onPopupImgEscKeydown(evt) {
  if (
    evt.key === 'Escape' &&
    !isCommentHashtagFocus() &&
    !bodyContainer.classList.contains('error')
  ) {
    evt.preventDefault();
    closePopupImg();
  }
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    sendData(new FormData(evt.target))
      .then(() => {
        showSuccessPopup();
        closePopupImg();
      })
      .catch(() => {
        showErrorPopup();
      })
      .finally(() => unblockSubmitButton());
  }
};

const renderPopupForm = () => {
  pristine.addValidator(hashtagContainer, validateTags, TAG_ERROR_TEXT);

  uploadFile.addEventListener('change', () => {
    openPopupImg();
  });

  form.addEventListener('submit', onFormSubmit);
  closeImgUpload.addEventListener('click', () => closePopupImg());
};

export { renderPopupForm };
