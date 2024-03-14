const PICTURES_COUNT = 10;
const filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterContainer = document.querySelector('.img-filters');
let currentFilter = filter.DEFAULT;
let pictures = [];

const sortRandom = () => Math.random() - 0.5;

const sortComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilterPictures = () => {
  if (currentFilter === filter.RANDOM) {
    return pictures.slice().sort(sortRandom).slice(0, PICTURES_COUNT);
  }
  if (currentFilter === filter.DISCUSSED) {
    return pictures.slice().sort(sortComments);
  }
  if (currentFilter === filter.DEFAULT) {
    return pictures;
  }
};

const onFilterClick = (cb) => {
  filterContainer.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.id === currentFilter) {
      return;
    }

    filterContainer
      .querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');
    target.classList.add('img-filters__button--active');
    currentFilter = target.id;
    cb(getFilterPictures());
  });
};

const getPicturesSort = (loadPictures, cb) => {
  filterContainer.classList.remove('img-filters--inactive');
  pictures = loadPictures.slice();
  onFilterClick(cb);
};

export { getPicturesSort, getFilterPictures };
