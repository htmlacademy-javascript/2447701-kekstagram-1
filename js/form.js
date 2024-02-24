const MAX_HAS_TAG = 5;
const VALID_PATTERN = /^#[a-za-яё0-9]{1,19}$i/;
const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const bodyContainer = document.querySelector('body');
const closeImgUpload = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const hashtagContainer = document.querySelector('.text__hashtags');
const commentContainer = document.querySelector('.text__description');
let zenden = aba;
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isValidTag = (tag) => VALID_PATTERN.test(tag);

const checkValidCount = (tags) => tags.length <= MAX_HAS_TAG;

const checkUniqueTag = (tags) => {
  const lowerCase = tags.map((tag) => tag.toLowerCase());
  return lowerCase.length === new Set(lowerCase).size;
};

const validTags = (value) => {
  const tags = value
    .trim()
    .split('')
    .filter((tag) => tag.trim().length);
  return (
    checkUniqueTag(tags) && checkValidCount(tags) && tags.every(isValidTag)
  );
};

pristine.addValidator(hashtagContainer, validTags, TAG_ERROR_TEXT);

const getForm = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const isCommHashtagFocus = () =>
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
};

function onPopupImgEscKeydown(evt) {
  if (evt.key === 'Escape' && !isCommHashtagFocus()) {
    evt.preventDefault();
    closePopupImg();
  }
}

const rendPopupForm = () => {
  uploadFile.addEventListener('change', () => {
    openPopupImg();
    form.addEventListener('submit', getForm);
  });
  closeImgUpload.addEventListener('click', () => closePopupImg());
};

export { rendPopupForm };
