import { renderPictures } from './render-thumbs.js';
import { renderGallery } from './render-big-photo.js';
import { renderPopupForm } from './form.js';
import { initScaleImage } from './scale.js';
import { initEffectSlider } from './effect.js';
import { getData } from './api.js';

renderPopupForm();
initScaleImage();
initEffectSlider();
getData().then((pictures) => {
  renderPictures(pictures);
  renderGallery(pictures);
});
