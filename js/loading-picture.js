const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const inputAvatarContainer = document.querySelector('#upload-file[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const previewEffect = document.querySelectorAll('.effects__preview');

const initLoadedPictures = () => {
  inputAvatarContainer.addEventListener('change', () => {
    const file = inputAvatarContainer.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
      previewEffect.forEach(
        (element) => (element.src = URL.createObjectURL(file))
      );
    }
  });
};
export { initLoadedPictures };
