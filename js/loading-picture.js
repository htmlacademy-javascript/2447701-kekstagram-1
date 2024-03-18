const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const inputAvatarContainer = document.querySelector('#upload-file[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const previewEffect = document.querySelectorAll('.effects__preview');

const initLoadedPictures = () => {
  inputAvatarContainer.addEventListener('change', () => {
    const file = inputAvatarContainer.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    const newURL = URL.createObjectURL(file);

    if (matches) {
      preview.src = newURL;
      previewEffect.forEach(
        (element) =>
          (element.style.backgroundImage = `url(${URL.createObjectURL(file)})`)
      );
    }
  });
};

export { initLoadedPictures };
