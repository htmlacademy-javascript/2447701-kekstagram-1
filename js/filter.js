const PICTURES_COUNT = 10;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterContainer = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;

const getFilterPictures = (pictures) => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return pictures
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return pictures
        .slice()
        .sort(
          (pictureA, pictureB) =>
            pictureB.comments.length - pictureA.comments.length
        );
    case Filter.DEFAULT:
      return pictures;
    default:
      throw new Error(`Unknown filter: ${currentFilter}`);
  }
};

const onFilterClick = (evt, pictures, cb) => {
  const target = evt.target;

  if (target.id === currentFilter || !target.id) {
    return;
  }

  filterContainer
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');

  target.classList.add('img-filters__button--active');
  currentFilter = target.id;

  const filteredPictures = getFilterPictures(pictures);

  cb(filteredPictures);
};

const initFilter = (loadedPictures, cb) => {
  filterContainer.classList.remove('img-filters--inactive');
  filterContainer.addEventListener('click', (evt) =>
    onFilterClick(evt, loadedPictures, cb)
  );
};

export { initFilter };
