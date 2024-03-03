const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;

const controlSmallerContainer = document.querySelector(
  '.scale__control--smaller'
);
const controlBiggerContainer = document.querySelector(
  '.scale__control--bigger'
);
const controlValueContainer = document.querySelector('.scale__control--value');
const uploadPreviewContainer = document.querySelector(
  '.img-upload__preview img'
);

const getParsedValue = () => parseInt(controlValueContainer.value, 10);

const getScaleImage = (value) => {
  uploadPreviewContainer.style.transform = `scale(${value / 100})`;
  controlValueContainer.value = `${value}%`;
};

const onSmallerClickButton = () => {
  const newValue = getParsedValue() - SCALE_STEP;

  getScaleImage(Math.max(newValue, SCALE_MIN));
};

const onBiggerClickButton = () => {
  const newValue = getParsedValue() + SCALE_STEP;

  getScaleImage(Math.min(newValue, SCALE_MAX));
};

const resetScale = () => getScaleImage(SCALE_DEFAULT);

const initScaleImage = () => {
  controlBiggerContainer.addEventListener('click', onBiggerClickButton);
  controlSmallerContainer.addEventListener('click', onSmallerClickButton);
};

export { initScaleImage, resetScale };
