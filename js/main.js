import { renderPictures } from './render-thumbs.js';
import { renderGallery } from './render-big-photo.js';
import { renderPopupForm } from './form.js';
import { initScaleImage } from './scale.js';
import { initEffectSlider } from './effect.js';
import { getData } from './api.js';
import { showAlert, debounce } from './util.js';
import { getPicturesSort } from './filter.js';

const debounceGallery = debounce(renderPictures);

renderPopupForm();
initScaleImage();
initEffectSlider();
getData()
  .then((pictures) => {
    getPicturesSort(pictures, debounceGallery);
    renderGallery(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });
