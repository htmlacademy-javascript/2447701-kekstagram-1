import { renderPictures } from './render-thumbs.js';
import { renderGallery } from './render-big-photo.js';
import { renderPopupForm } from './form.js';
import { initScaleImage } from './scale.js';
import { initEffectSlider } from './effect.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

renderPopupForm();
initScaleImage();
initEffectSlider();
getData()
  .then((pictures) => {
    renderPictures(pictures);
    renderGallery(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });
