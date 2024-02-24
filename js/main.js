import { createPictures } from './data.js';
import { renderPictures } from './render-thumbs.js';
import { renderGallery } from './render-big-photo.js';
import { rendPopupForm } from './form.js';

const pictures = createPictures();
renderPictures(pictures);
renderGallery(pictures);
rendPopupForm();
