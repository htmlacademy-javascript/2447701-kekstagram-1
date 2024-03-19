const bodyContainer = document.querySelector('body');
const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const showErrorPopup = () => {
  const errorElement = errorTemplate.cloneNode(true);
  const closeErrorButton = errorElement.querySelector('.error__button');
  const errorInner = errorElement.querySelector('.error__inner');
  bodyContainer.append(errorElement);
  bodyContainer.classList.add('error');

  const closePopupError = () => {
    errorElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    bodyContainer.classList.remove('error');
  };

  closeErrorButton.addEventListener('click', () => closePopupError());
  errorInner.addEventListener('click', (evt) => evt.stopPropagation());
  errorElement.addEventListener('click', () => closePopupError());

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      closePopupError();
    }
  }

  document.addEventListener('keydown', onDocumentKeydown);
};

const showSuccessPopup = () => {
  const successElement = successTemplate.cloneNode(true);
  const closeSuccessButton = successElement.querySelector('.success__button');
  const successInner = successElement.querySelector('.success__inner');
  bodyContainer.append(successElement);

  const closePopupSuccess = () => {
    successElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  closeSuccessButton.addEventListener('click', () => closePopupSuccess());
  successInner.addEventListener('click', (evt) => evt.stopPropagation());
  successElement.addEventListener('click', () => closePopupSuccess());

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      closePopupSuccess();
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);
};

export { showErrorPopup, showSuccessPopup };
