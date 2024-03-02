import { createPictures } from './data.js';
import { renderPictures } from './render-thumbs.js';
import { renderGallery } from './render-big-photo.js';
import { renderPopupForm } from './form.js';
import { changeScaleImage } from './scale.js';
import { getEffect } from './effect.js';

const pictures = createPictures();
renderPictures(pictures);
renderGallery(pictures);
renderPopupForm();
changeScaleImage();
getEffect();
