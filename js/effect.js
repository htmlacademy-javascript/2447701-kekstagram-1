const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_MEANING_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_MEANING_EFFECT;

const effectsContainer = document.querySelector('.effects');
const imageContainer = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.effect-level__slider');
const effectLevelContainer = document.querySelector('.effect-level__value');
const sliderUploadContainer = document.querySelector(
  '.img-upload__effect-level'
);

const showSlider = () => {
  sliderUploadContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderUploadContainer.classList.add('hidden');
};

const isDefault = () => chosenEffect === DEFAULT_MEANING_EFFECT;

const updateSlider = () => {
  sliderContainer.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageContainer.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onUpdateSlider = () => {
  const sliderData = sliderContainer.noUiSlider.get();
  imageContainer.style.filter = isDefault()
    ? DEFAULT_MEANING_EFFECT.style
    : `${chosenEffect.style}(${sliderData}${chosenEffect.unit})`;
  effectLevelContainer.value = sliderData;
};

const resetEffect = () => {
  chosenEffect = DEFAULT_MEANING_EFFECT;
  updateSlider();
};

const getSlider = () =>
  noUiSlider.create(sliderContainer, {
    range: {
      min: DEFAULT_MEANING_EFFECT.min,
      max: DEFAULT_MEANING_EFFECT.max,
    },
    start: DEFAULT_MEANING_EFFECT.max,
    step: DEFAULT_MEANING_EFFECT.step,
    connect: 'lower',
  });

const initEffectSlider = () => {
  getSlider();
  effectsContainer.addEventListener('change', onEffectsChange);
  sliderContainer.noUiSlider.on('update', onUpdateSlider);
  hideSlider();
};

export { resetEffect, initEffectSlider };
