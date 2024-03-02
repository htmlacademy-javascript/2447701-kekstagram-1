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
const uploadPreviewContainer = document.querySelector('.img-upload__preview');

const getParseValue = () => {
  const nowValue = parseInt(controlValueContainer.value, 10);

  return nowValue;
};

const getScaleImage = (value) => {
  uploadPreviewContainer.style.transform = `scale(${value / 100})`;
  controlValueContainer.value = `${value}%`;
};

const onSmallerClickButton = () => {
  let valueSmall = getParseValue() - SCALE_STEP;

  if (valueSmall < SCALE_MIN) {
    valueSmall = SCALE_MIN;
  }
  getScaleImage(valueSmall);
};

const onBiggerClickButton = () => {
  let valueBig = getParseValue() + SCALE_STEP;

  if (valueBig > SCALE_MAX) {
    valueBig = SCALE_MAX;
  }
  getScaleImage(valueBig);
};

const onScaleReset = () => getScaleImage(SCALE_DEFAULT);

const changeScaleImage = () => {
  controlBiggerContainer.addEventListener('click', onBiggerClickButton);
  controlSmallerContainer.addEventListener('click', onSmallerClickButton);
};

export { changeScaleImage };
export { onScaleReset };
