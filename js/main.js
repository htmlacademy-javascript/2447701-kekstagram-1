//import { createPictures } from './data.js';
import { renderPictures } from './render-thumbs.js';
import { renderGallery } from './render-big-photo.js';
import { renderPopupForm } from './form.js';
import { initScaleImage } from './scale.js';
import { initEffectSlider } from './effect.js';
import { getData } from './api-receiving.js';

//const pictures = createPictures();

//renderPictures(pictures);
//renderGallery(pictures);
renderPopupForm();
initScaleImage();
initEffectSlider();
getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .then((pictures) => {
    renderGallery(pictures);
  });
console.log(getData());
//.then((pictures) => {
//renderGallery(pictures);
//});
