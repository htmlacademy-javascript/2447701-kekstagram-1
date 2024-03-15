import { renderPictures } from './render-thumbs.js';
import { initGallery } from './render-big-photo.js';
import { renderPopupForm } from './form.js';
import { initScaleImage } from './scale.js';
import { initEffectSlider } from './effect.js';
import { getData } from './api.js';
import { showAlert, debounce } from './util.js';
import { initFilter } from './filter.js';

const debouncedPictureRender = debounce(renderPictures);

renderPopupForm();
initScaleImage();
initEffectSlider();
getData()
  .then((pictures) => {
    initFilter(pictures, debouncedPictureRender);
    initGallery(pictures);
    renderPictures(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });
